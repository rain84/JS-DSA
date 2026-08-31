/**
 * 283. Move Zeroes
 * {@link https://leetcode.com/problems/move-zeroes/ | Link}
 *
 * Topics: Array | Two Pointers
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */
export function moveZeroes(nums: number[]): void {
	let i = 0

	for (const x of nums) {
		if (x) {
			nums[i++] = x
		}
	}

	while (i < nums.length) {
		nums[i++] = 0
	}
}
