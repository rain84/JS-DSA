/**
 Написать функцию, которая принимает на вход число 
 и возвращает строку с красивым счетчиком.
 */

type Types = 'K' | 'M' | 'B'
const types: Record<number, Types> = {
	1: 'K',
	2: 'M',
	3: 'B',
} as const

export const formatCounter = (input: number): string => {
	const x = Math.abs(input)
	if (x < 1000) return String(input)

	const sign = input < 0 ? '-' : ''
	const { length } = String(x)
	const type = Math.floor(length / 3)
	const suffix = types[type]
	let n = (x / 1000 ** type).toFixed(1)

	const shouldBeTruncated = n.at(-1) === '0'
	if (shouldBeTruncated) {
		n = n.slice(0, n.length - 2)
	}

	return sign + n + suffix
}
