/**
 * {@link https://leetcode.com/problems/find-numbers-with-even-number-of-digits | 1295. Find Numbers with Even Number of Digits}
 *
 * Topics: Array | Math
 */
export function findNumbers(nums: number[]): number {
  return nums.filter((x) => String(x).length % 2 === 0).length
}
