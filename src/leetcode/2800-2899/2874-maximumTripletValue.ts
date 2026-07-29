/**
 * {@link https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii | 2874. Maximum Value of an Ordered Triplet II}
 *
 * Topics: Array
 */
export function maximumTripletValue(nums: number[]): number {
  const n = nums.length
  const maxRight = Array(n).fill(nums[n - 1])

  for (let i = n - 2; i > 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], nums[i + 1])
  }

  let [res, maxLeft] = [0, 0]
  for (let i = 1; i < n - 1; i++) {
    maxLeft = Math.max(maxLeft, nums[i - 1])
    res = Math.max((maxLeft - nums[i]) * maxRight[i], res)
  }

  return res
}
