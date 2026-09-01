/**
 * 414. Third Maximum Number
 * {@link https://leetcode.com/problems/third-maximum-number/ | Link}
 *
 * Topics: Array | Sorting
 *
 * Given an integer array nums, return the third distinct maximum number in this array.
 * If the third maximum does not exist, return the maximum number.
 */
export function thirdMax(nums: number[]): number {
	let first: number | null = null
	let second: number | null = null
	let third: number | null = null

	for (const x of nums) {
		if (x === first || x === second || x === third) continue
		if (first === null || x > first) {
			third = second
			second = first
			first = x
		} else if (second === null || x > second) {
			third = second
			second = x
		} else if (third === null || x > third) {
			third = x
		}
	}

	return third === null ? first! : third
}
