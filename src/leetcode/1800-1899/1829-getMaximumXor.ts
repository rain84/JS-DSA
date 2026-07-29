/**
 * {@link https://leetcode.com/problems/maximum-xor-for-each-query | 1829. Get Maximum XOR For Each Query}
 *
 * Topics: Array | Bit Manipulation | Prefix Sum
 */
export function getMaximumXor(nums: number[], maximumBit: number): number[] {
  const mask = (1 << maximumBit) - 1
  const res: number[] = []
  let i = nums.length - 1
  let xor = nums.reduce((a, b) => a ^ b)

  do {
    res.push(xor ^ mask)
    xor ^= nums[i]
  } while (i--)

  return res
}
