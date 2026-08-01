export const compressString = (str: string): string =>
	[...str].reduce((acc: string, val: string) => {
		const [, str, prevItem, lastItem] = /(.*)(\D)(\d+)$/.exec(acc) || /(.*)()(\D+)$/.exec(acc) || []

		if (!lastItem) return val
		if (lastItem === val) return acc + 2
		if (/^\d+$/.test(lastItem)) {
			if (prevItem === val) return str + prevItem + (+lastItem + 1)

			return acc + val
		}

		return acc + val
	}, '')

const compressString2 = (str: string): string => {
	let lastCh: string = str[0]
	let nextCh = ''
	const res: string[] = []
	let counter = 1

	const push = (ch: string): void => {
		res.push(ch)
		if (1 < counter) {
			res.push(counter.toString())
			counter = 1
		}
	}

	for (let i = 1; i < str.length; i++) {
		nextCh = str[i]

		if (nextCh === lastCh) counter++
		else {
			push(lastCh)
			lastCh = nextCh
		}
	}

	push(nextCh)

	return res.join('')
}

const testing = (fns: Fn[], validationData: [string, string][]) => {
	for (const fn of fns) {
		console.log(`Function '${fn.name}'`)

		for (const [data, expects] of validationData) {
			const res = fn(data)
			console.log(res, res === expects)
		}
		console.log('\n')
	}
}

testing(
	[compressString, compressString2],
	[
		['AVVVBB', 'AV3B2'],
		['AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD', 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'],
		['ABCD', 'ABCD'],
		['', ''],
		['AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!', 'A50!3'],
	],
)
