/**
 * 1464. Search Insert Position
 * {@link https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/ | Link}
 */
export function maxProduct(nums: number[]): number {
	let [i, j] = [-1, -1]

	for (let k = 0; k < nums.length; k++) {
		const x = nums[i] ?? Number.NEGATIVE_INFINITY
		if (nums[k] >= x) {
			i = k
		}
	}

	for (let k = 0; k < nums.length; k++) {
		if (k === i) continue

		const val = nums[j] ?? Number.NEGATIVE_INFINITY
		if (nums[k] >= val) {
			j = k
		}
	}

	return (nums[i] - 1) * (nums[j] - 1)
}
