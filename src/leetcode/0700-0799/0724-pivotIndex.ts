/**
 * 724. Find Pivot Index
 * {@link https://leetcode.com/problems/find-pivot-index/ | Link}
 */
export function pivotIndex(nums: number[]): number {
  const n = nums.length
  const prefixSum: number[] = [nums[0]]

  for (let i = 1; i < n; i++) {
    prefixSum[i] = nums[i] + prefixSum[i - 1]
  }

  const sum = prefixSum.at(-1)!

  for (let i = 0; i < n; i++) {
    const left = prefixSum[i - 1] ?? 0
    const right = sum - prefixSum[i]

    if (left === right) return i
  }

  return -1
}
