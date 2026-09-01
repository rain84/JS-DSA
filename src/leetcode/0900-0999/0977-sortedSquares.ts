/**
 * 977. Squares of a Sorted Array
 * {@link https://leetcode.com/problems/squares-of-a-sorted-array/ | Link}
 *
 * Topics: Array | Two Pointers | Sorting
 *
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 */
export const sortedSquares = (nums: number[]): number[] => {
	const n = nums.length
	const res = Array(n).fill(0)
	let l = 0
	let r = n - 1

	for (let i = n - 1; i >= 0; i--) {
		const lSquare = nums[l] ** 2
		const rSquare = nums[r] ** 2

		if (lSquare > rSquare) {
			res[i] = lSquare
			l++
		} else {
			res[i] = rSquare
			r--
		}
	}

	return res
}
