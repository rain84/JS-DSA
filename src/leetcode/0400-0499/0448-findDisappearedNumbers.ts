/**
 * 448. Find All Numbers Disappeared in an Array
 * {@link https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/ | Link}
 *
 * Topics: Array | Hash Table
 *
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 */
export function findDisappearedNumbers(nums: number[]): number[] {
	const res: number[] = []
	const set = new Set(nums)

	for (let i = 1; i <= nums.length; i++) {
		if (!set.has(i)) {
			res.push(i)
		}
	}

	return res
}

export function findDisappearedNumbers2(nums: number[]): number[] {
	for (let i = 0; i < nums.length; i++) {
		const idx = Math.abs(nums[i]) - 1
		if (nums[idx] > 0) {
			nums[idx] = -nums[idx]
		}
	}

	const res: number[] = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			res.push(i + 1)
		}
	}

	return res
}
