/**
 * 136. Single Number
 * {@link https://leetcode.com/problems/single-number | Link}
 *
 * Topics: Array Bit Manipulation
 */
export function singleNumber(nums: number[]): number {
  const sumOfUnique = [...new Set(nums)].reduce((a, b) => a + b, 0)
  const sum = nums.reduce((a, b) => a + b, 0)
  return (sumOfUnique * 3 - sum) / 2
}

export function singleNumber2(nums: number[]): number {
  let [ans, acc] = [0, 0]

  for (const x of nums) {
    ans ^= x & ~acc
    acc ^= x & ~ans
  }

  return ans
}
