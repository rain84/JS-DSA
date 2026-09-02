/**
 * 896. Monotonic Array
 * {@link https://leetcode.com/problems/monotonic-array/ | Link}
 *
 * Topics: Array
 *
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
 * An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 * Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 */
export function isMonotonic(nums: number[]): boolean {
	let isIncrease = true
	let isDecrease = true

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] > 0) isDecrease = false
		if (nums[i] - nums[i - 1] < 0) isIncrease = false
		if (!isDecrease && !isIncrease) return false
	}

	return true
}
