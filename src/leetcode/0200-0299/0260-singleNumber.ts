/**
 * 260. Single Number III
 * {@link https://leetcode.com/problems/single-number-iii/ | Link}
 *
 * Topics: Bit Manipulation | Array
 */
export function singleNumber(nums: number[]): number[] {
  const xs = nums.reduce((a, b) => a ^ b, 0)
  const lowBit = xs & -xs
  let a = 0

  for (const x of nums) {
    if (lowBit & x) a ^= x
  }

  return [a, xs ^ a]
}
export function singleNumber2(nums: number[]): number[] {
  const set = new Set<number>()

  for (const x of nums) {
    if (set.has(x)) set.delete(x)
    else set.add(x)
  }

  return [...set]
}
