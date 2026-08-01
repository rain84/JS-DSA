export const compress = (str: string): string => {
	let result = ''
	let counter = 0

	for (let i = 0; i < str.length; i++) {
		const ch = str[i]
		const chNext = str[i + 1]

		counter++
		if (chNext !== ch || chNext === undefined) {
			result += (counter > 1 ? counter : '') + ch
			counter = 0
		}
	}

	return result
}

export const decompress = (str: string): string => {
	if (typeof str !== 'string' || !str.length) return ''

	const result: string[] = []
	let i = 0
	let count = 0

	do {
		const ch = str[i]
		const number = +ch
		const isNumber = !Number.isNaN(number)

		if (isNumber) {
			count = count === 0 ? number : count * 10 + number
			continue
		}

		const substr = ch.repeat(count || 1)
		result.push(substr)
		count = 0
	} while (++i < str.length)

	return result.join('')
}
