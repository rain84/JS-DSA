/**
 * {@link https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/ | 2419. Longest Subarray With Maximum Bitwise AND}
 *
 * Topics: Array | Bit Manipulation | Brainteaser
 */
export function longestSubarray(nums: number[]): number {
  const max = Math.max(...nums)
  let [res, c] = [0, 0]

  for (const x of nums) {
    if (x === max) {
      c++
      res = Math.max(res, c)
    } else {
      c = 0
    }
  }

  return res
}
