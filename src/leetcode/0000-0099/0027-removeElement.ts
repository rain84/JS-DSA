/**
 * 27. Remove Element
 * {@link https://leetcode.com/problems/remove-element/ | Link}
 *
 * Topics: Array | Two Pointers
 *
 */
export function removeElement(nums: number[], val: number): number {
	let i = 0

	for (const x of nums) {
		if (x !== val) {
			nums[i++] = x
		}
	}

	return i
}

export function removeElement2(nums: number[], val: number): number {
	let l = 0
	let r = nums.length - 1

	while (l <= r) {
		if (nums[l] === val) {
			;[nums[l], nums[r]] = [nums[r], nums[l]]
			r--
		} else {
			l++
		}
	}

	return l
}
