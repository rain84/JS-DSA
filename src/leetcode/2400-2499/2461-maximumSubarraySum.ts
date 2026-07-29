/**
 * {@link https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k | 2461. Maximum Sum of Distinct Subarrays With Length K}
 *
 * Topics: Array | Hash Table | Sliding Window
 */
export function maximumSubarraySum(nums: number[], k: number): number {
  const n = nums.length
  const cnt = new Map<number, number>()
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += nums[i]
    cnt.set(nums[i], (cnt.get(nums[i]) ?? 0) + 1)
  }

  let res = cnt.size === k ? sum : 0

  for (let i = k; i < n; i++) {
    const [last, next] = [nums[i - k], nums[i]]
    sum += next - last

    if (cnt.get(last) === 1) cnt.delete(last)
    else cnt.set(last, cnt.get(last)! - 1)
    cnt.set(next, (cnt.get(next) ?? 0) + 1)

    if (cnt.size === k) res = Math.max(res, sum)
  }

  return res
}
