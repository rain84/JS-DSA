/**
 * {@link https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i | 3254. Find the Power of K-Size Subarrays I}
 *
 * Topics: Array | Sliding Window
 */
export function resultsArray(nums: number[], k: number): number[] {
  const n = nums.length
  const res: number[] = []

  for (let i = 0, j = 0; i < n; i++) {
    if (i && nums[i - 1] + 1 !== nums[i]) j = i
    if (i >= k - 1) {
      res.push(i - k + 1 < j ? -1 : nums[i])
    }
  }

  return res
}
