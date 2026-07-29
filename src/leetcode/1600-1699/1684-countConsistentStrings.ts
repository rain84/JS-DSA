/**
 * {@link https://leetcode.com/problems/count-the-number-of-consistent-strings/ | 1684. Count the Number of Consistent Strings}
 *
 * Topics: Array | Hash Table | String | Bit Manipulation | Counting
 */
export function countConsistentStrings(allowed: string, words: string[]): number {
  const set = new Set(allowed)
  let res = words.length

  for (const s of words) {
    for (const ch of new Set(s)) {
      if (!set.has(ch)) {
        res--
        break
      }
    }
  }

  return res
}
