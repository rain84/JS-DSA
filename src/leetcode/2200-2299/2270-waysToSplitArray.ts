/**
 * {@link https://leetcode.com/problems/number-of-ways-to-split-array | 2270. Number of Ways to Split Array}
 *
 * Topics: Array | Prefix Sum
 */
export function waysToSplitArray(nums: number[]): number {
  const n = nums.length
  let [res, l, r] = [0, 0, nums.reduce((a, b) => a + b, 0)]

  for (let i = 0; i < n - 1; i++) {
    l += nums[i]
    r -= nums[i]
    if (l >= r) res++
  }

  return res
}
