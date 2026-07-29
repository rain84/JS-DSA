/**
 * {@link https://leetcode.com/problems/minimum-bit-flips-to-convert-number/ | 2220. Minimum Bit Flips to Convert Number}
 *
 * Topics: Bit Manipulation
 */
export function minBitFlips(start: number, goal: number): number {
  return (start ^ goal).toString(2).replaceAll('0', '').length
}
