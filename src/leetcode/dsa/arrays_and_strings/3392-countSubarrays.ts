/**
 * {@link https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition | 3392. Count Subarrays of Length Three With a Condition}
 *
 * Topics: Array
 */
export function countSubarrays(nums: number[]): number {
  const n = nums.length
  let [res] = [0, 0]

  for (let i = 2; i < n; i++) {
    if ((nums[i] + nums[i - 2]) * 2 === nums[i - 1]) {
      res++
    }
  }

  return res
}
