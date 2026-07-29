/**
 * {@link https://leetcode.com/problems/maximum-ascending-subarray-sum/ | 1800. Maximum Ascending Subarray Sum}
 *
 * Topics: Array
 */
export function maxAscendingSum(nums: number[]): number {
  const n = nums.length
  let [res, sum] = [nums[0], nums[0]]

  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) {
      res = Math.max(res, sum)
      sum = 0
    }

    sum += nums[i]
  }

  return Math.max(res, sum)
}
