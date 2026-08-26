/**
 * 66. Plus One
 * {@link https://leetcode.com/problems/plus-one/ | Link}
 *
 * Topics: Array | Math
 */

function plusOne(digits: number[]): number[] {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 9) {
			digits[i]++
			return digits
		}
		digits[i] = 0
	}

	return [1, ...digits]
}
