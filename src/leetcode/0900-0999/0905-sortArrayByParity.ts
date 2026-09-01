/**
 * 905. Sort Array By Parity
 * {@link https://leetcode.com/problems/sort-array-by-parity/ | Link}
 *
 * Topics: Array | Two Pointers | Sorting
 *
 * Given an integer array nums, move all the even integers at the beginning
 * of the array followed by all the odd integers.
 * Return any array that satisfies this condition.
 */
export function sortArrayByParity(nums: number[]): number[] {
	let l = 0
	let r = nums.length - 1

	const isOdd = (x: number) => x & 1
	const isEven = (x: number) => !isOdd(x)

	while (l < r) {
		if (isEven(nums[l])) {
			l++
		}

		if (isOdd(nums[r])) {
			r--
		}

		if (l < r && isOdd(nums[l]) && isEven(nums[r])) {
			;[nums[l], nums[r]] = [nums[r], nums[l]]
			l++
			r--
		}
	}

	return nums
}

export function sortArrayByParity2(nums: number[]): number[] {
	const evens: number[] = []
	const odds: number[] = []

	for (const x of nums) {
		if (x & 1) {
			odds.push(x)
		} else {
			evens.push(x)
		}
	}

	return [...evens, ...odds]
}
