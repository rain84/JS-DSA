/**
 * {@link https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray | 3105. Longest Strictly Increasing or Strictly Decreasing Subarray}
 *
 * Topics: Array
 */
export function longestMonotonicSubarray(nums: number[]): number {
  const n = nums.length
  let res = 1

  for (let i = 1, t1 = 1, t2 = 1; i < n; i++) {
    t1 = nums[i] > nums[i - 1] ? t1 + 1 : 1
    t2 = nums[i] < nums[i - 1] ? t2 + 1 : 1
    res = Math.max(res, t1, t2)
  }

  return res
}
