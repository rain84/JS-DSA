/**
 * {@link https://leetcode.com/problems/count-prefix-and-suffix-pairs-i | 3042. Count Prefix and Suffix Pairs I}
 *
 * Topics: Array | String | Trie | Rolling Hash | String Matching | Hash Function
 */
export function countPrefixSuffixPairs(words: string[]): number {
  const n = words.length
  let res = 0

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        res++
      }
    }
  }

  return res
}
