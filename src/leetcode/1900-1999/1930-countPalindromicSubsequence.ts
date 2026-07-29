/**
 * {@link https://leetcode.com/problems/unique-length-3-palindromic-subsequences | 1930. Unique Length-3 Palindromic Subsequences}
 *
 * Topics: Hash Table | String | Bit Manipulation | Prefix Sum
 */
export function countPalindromicSubsequence(s: string): number {
  const cnt = new Map<string, [number, number]>()
  const n = s.length
  let res = 0

  for (let i = 0; i < n; i++) {
    const ch = s[i]
    if (cnt.has(ch)) cnt.get(ch)![1] = i
    else cnt.set(ch, [i, i])
  }

  for (const [_, [i, j]] of cnt) {
    if (i !== j) {
      res += new Set(s.slice(i + 1, j)).size
    }
  }

  return res
}
