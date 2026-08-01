export const isEqualSymbols = (s1: string, s2: string): boolean => {
	const obj: { [prop: string]: number } = {}

	for (const ch of s1) obj[ch] ? obj[ch]++ : (obj[ch] = 1)
	for (const ch of s2) {
		if (obj[ch] === undefined || --obj[ch] < 0) return false
	}

	return true
}

console.log(`isEqualSymbols('кот', 'ток') === ${isEqualSymbols('кот', 'ток')}`)
console.log(`isEqualSymbols('кот', 'тик') === ${isEqualSymbols('кот', 'тик')}`)
