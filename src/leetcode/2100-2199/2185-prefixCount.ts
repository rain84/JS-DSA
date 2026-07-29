/**
 * {@link https://leetcode.com/problems/counting-words-with-a-given-prefix | 2185. Counting Words With a Given Prefix}
 *
 * Topics: Array | String | String Matching
 */
export const prefixCount = (words: string[], pref: string): number =>
  words.reduce((acc, x) => acc + +x.startsWith(pref), 0)
