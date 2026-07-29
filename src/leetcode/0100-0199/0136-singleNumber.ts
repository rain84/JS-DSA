/**
 * 136. Single Number
 * {@link https://leetcode.com/problems/single-number | Link}
 *
 * Topics: Array Bit Manipulation
 */
export function singleNumber(nums: number[]): number {
  return nums.reduce((acc, x) => acc ^ x, 0)
}
