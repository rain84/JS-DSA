/**
 * 209. Minimum Size Subarray Sum
 * {@link https://leetcode.com/problems/minimum-size-subarray-sum/ | Link}
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let res = Number.POSITIVE_INFINITY
  let sum = nums[0]
  const n = nums.length

  for (let l = 0, r = 0; r < n; ) {
    if (sum >= target) {
      res = Math.min(res, r - l + 1)
      sum -= nums[l++]
    }
    if (sum < target) sum += nums[++r]
  }

  return res === Number.POSITIVE_INFINITY ? 0 : res
}
