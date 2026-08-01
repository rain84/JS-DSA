import fs from 'node:fs/promises'
import path from 'node:path'

const noop = async () => {}

export const traverseDirRecursive = async (dirPath, action = noop, logEntryPath = false) => {
	const entries = await fs.readdir(dirPath)

	const entriesPromiseOfStat = entries.reduce((arrayOfPromises, fileName) => {
		if (!fileName.startsWith('.')) {
			const entry = { path: path.resolve(dirPath, fileName) }
			entry.stat = fs.stat(entry.path)

			arrayOfPromises.push(
				new Promise((resolve, reject) =>
					entry.stat
						.then((entryStat) => {
							entry.stat = entryStat
							resolve({ entry })
						})
						.catch(reject),
				),
			)
		}
		return arrayOfPromises
	}, [])

	const entriesStat = await Promise.all(entriesPromiseOfStat)

	for (const { entry } of entriesStat) {
		if (logEntryPath) console.log(entry.path)

		let result = await action(entry)

		if (!result && entry.stat.isDirectory()) {
			result = await traverseDirRecursive(entry.path, action, logEntryPath)
		}

		if (result) return result
	}
}
