// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

export function removeDuplicates(nums: Array<number | undefined>): number {
	let last = 0

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[last]) {
			nums[++last] = nums[i]
		}
	}

	if (last !== nums.length - 1) nums.length = last + 1

	return nums.length
}
