/**
 * {@link https://leetcode.com/problems/find-the-largest-almost-missing-integer | 3471. Find the Largest Almost Missing Integer
}
 *
 * Topics: Array | Hash Table | Linked List
 */

export function largestInteger(nums: number[], k: number): number {
	if (k === 1) {
		const unique = new Set<number>()
		const seen = new Set<number>()

		for (const x of nums) {
			if (seen.has(x)) continue
			if (unique.has(x)) {
				unique.delete(x)
				seen.add(x)
			} else unique.add(x)
		}

		return unique.size > 0 ? Math.max(...unique) : -1
	}

	const n = nums.length
	if (k === n) {
		return Math.max(...nums)
	}

	const unique = new Set([nums[0], nums[n - 1]])
	if (unique.size === 1) return -1

	for (let i = 1; i < n - 1; i++) {
		if (unique.has(nums[i])) unique.delete(nums[i])
		if (unique.size === 0) return -1
	}

	return unique.size > 0 ? Math.max(...unique.values()) : -1
}
