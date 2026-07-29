/**
 * {@link https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i | 3191. Minimum Operations to Make Binary Array Elements Equal to One I}
 *
 * Topics: Array | Bit Manipulation | Queue | Sliding Window | Prefix Sum
 */
export function minOperations(nums: number[]): number {
  const n = nums.length
  let c = 0

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1
      nums[i + 1] ^= 1
      nums[i + 2] ^= 1
      c++
    }
  }

  if (nums[n - 1] === 0 || nums[n - 2] === 0) return -1

  return c
}
