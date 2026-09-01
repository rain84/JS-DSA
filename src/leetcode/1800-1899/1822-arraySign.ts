/**
 * 1822. Sign of the Product of an Array
 * {@link https://leetcode.com/problems/sign-of-the-product-of-an-array/ | Link}
 *
 * Topics: Array | Math
 *
 * There is a function signFunc(x) that returns:
 * 1 if x is positive, -1 if x is negative, 0 if x is equal to 0.
 * You are given an integer array nums. Let product be the product of all values in the array nums.
 * Return signFunc(product).
 */
export function arraySign(nums: number[]): number {
	let cnt = 0

	for (const x of nums) {
		if (x === 0) return 0
		if (x < 0) cnt++
	}

	return cnt & 1 ? -1 : 1
}

export function arraySign2(nums: number[]): number {
	let neg = 0
	for (const x of nums) {
		if (x === 0) return 0
		if (x < 0) neg++
	}
	return neg % 2 === 0 ? 1 : -1
}
