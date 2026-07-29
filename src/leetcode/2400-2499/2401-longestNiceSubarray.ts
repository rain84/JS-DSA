import { perf } from 'utils/perf'

/**
 * {@link https://leetcode.com/problems/longest-nice-subarray | 2401. Longest Nice Subarray}
 *
 * Topics: Array | Bit Manipulation | Sliding Window
 */
export function longestNiceSubarray(nums: number[]): number {
  let [res, l, r, bitmask] = [0, 0, 0, 0]

  while (r < nums.length) {
    const haveBit = nums[r] & bitmask

    if (haveBit) {
      bitmask ^= nums[l++]
    } else {
      bitmask |= nums[r++]
      res = Math.max(res, r - l)
    }
  }

  return res
}
