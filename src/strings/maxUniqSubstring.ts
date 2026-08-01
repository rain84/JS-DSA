export const maxUniqSubstring = (str: string) => {
	const cache = new Set<string>()
	const max = {
		pointers: { l: 0, r: 0 },
		length: 0,
	}

	for (let i = 0; i < str.length; i++) {
		const ch = str[i]

		if (cache.has(ch)) {
			if (max.length < cache.size) {
				max.length = cache.size
				max.pointers.l = i - cache.size
				max.pointers.r = i
				cache.clear()
			}
		}
		cache.add(ch)
	}

	const maxSubstr = max.length ? str.slice(max.pointers.l, max.pointers.r) : str
	return maxSubstr
}

console.log(`
  hellothere: ${maxUniqSubstring('hellothere')}
  helot: ${maxUniqSubstring('helot')}
`)
