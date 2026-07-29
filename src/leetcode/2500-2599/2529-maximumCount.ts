/**
 * {@link https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer | 2529. Maximum Count of Positive Integer and Negative Integer}
 *
 * Topics: Array | Binary Search | Counting
 */
export function maximumCount(nums: number[]): number {
  let [c1, c2] = [0, 0]

  for (const x of nums) {
    if (x > 0) c1++
    else if (x < 0) c2++
  }

  return Math.max(c1, c2)
}
