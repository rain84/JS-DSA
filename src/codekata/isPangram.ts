// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript

export const isPangram = (phrase: string): boolean =>
	new Set(phrase.toLowerCase().replaceAll(/[^a-z]/g, '')).size === 26

export const isPangram2 = (phrase: string): boolean => {
	const alphabet = [...'abcdefghijklmnopqrstuvwxyz'].reduce<Record<string, number>>(
		(acc, val) => ((acc[val] = 1), acc),
		{},
	)

	let count = 0
	for (const ch of phrase.toLowerCase()) {
		if (!alphabet[ch]) continue

		count += alphabet[ch]
		alphabet[ch] = 0

		if (count === 26) return true
	}

	return false
}
