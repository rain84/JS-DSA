/**
 * 1. Roman to Integer
 * {@link https://leetcode.com/problems/roman-to-integer | Link}
 *
 */
export function romanToInt(s: string): number {
	const map: RomanMapping = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}

	let res = 0

	for (let i = 0; i < s.length - 1; i++) {
		const val = map[s[i] as RomanDigit]
		const next = map[s[i + 1] as RomanDigit]
		res = val < next ? res - val : res + val
	}

	const last = map[s[s.length - 1] as RomanDigit]

	return res + last
}

type RomanDigit = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'
type RomanMapping = Record<RomanDigit, number>
