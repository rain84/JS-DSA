import { exec as _exec } from 'node:child_process'
import path from 'node:path'
import { promisify } from 'node:util'
import { traverseDirRecursive } from './utils/index.js'

const exec = promisify(_exec)

const getScriptConfig = () => {
	try {
		const { base, ext, name } = path.parse(process.argv[2])

		if (!name || !ext) return

		return {
			base,
			ext: ext.slice(1),
			name,
		}
	} catch {}
}

const execScript = async (config) => {
	const action = async (entry) => {
		const isTarget = entry.path.endsWith(config.base)
		if (!isTarget) return

		const is = {
			[config.ext]: true,
		}

		if (is.js || is.mjs) return import(entry.path)

		if (is.ts) {
			const command = [
				`cp ${config.base} tmp.ts`,
				'tsc tmp.ts --target esnext --module CommonJS',
				'mv tmp.js tmp.cjs',
				'node tmp.cjs',
				'rm tmp.cjs tmp.ts',
			].join(' && ')
			const { error, stdout } = await exec(command, { cwd: path.dirname(entry.path) })

			if (error) {
				error.message = 'TS execution error'
				throw error
			}

			console.log(stdout)
		}
	}

	const initialFolder = path.resolve(process.cwd(), 'src')
	return traverseDirRecursive(initialFolder, action)
}

const run = () => {
	try {
		const config = getScriptConfig()

		if (!config) throw new Error('Wrong file name')

		execScript(config)
	} catch (error) {
		console.log(error)
		throw error
	}
}
run()
