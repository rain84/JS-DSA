/**
 * {@link https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced | 1963. Minimum Number of Swaps to Make the String Balanced}
 *
 * Topics: Two Pointers | String | Stack | Greedy
 */
export function minSwaps(s: string): number {
  let x = 0

  for (const ch of s) {
    if (ch === '[') x++
    else if (x) x--
  }

  return (x + 1) >> 1
}
