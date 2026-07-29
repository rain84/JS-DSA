/**
 * {@link https://leetcode.com/problems/bitwise-xor-of-all-pairings | 2425. Bitwise XOR of All Pairings}
 *
 * Topics: Array | Bit Manipulation | Brainteaser
 */
export function xorAllNums(nums1: number[], nums2: number[]): number {
  let [xor1, xor2] = [0, 0]

  if (nums1.length & 1) for (const x of nums2) xor2 ^= x
  if (nums2.length & 1) for (const x of nums1) xor1 ^= x

  return xor1 ^ xor2
}
