/**
 * {@link https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray | 1749. Maximum Absolute Sum of Any Subarray}
 *
 * Topics: Array | Dynamic Programming
 */
export function maxAbsoluteSum(nums: number[]): number {
  let [res, min, max] = [0, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]

  for (const x of nums) {
    min = Math.min(min + x, x)
    max = Math.max(max + x, x)
    res = Math.max(res, -min, max)
  }

  return res
}
