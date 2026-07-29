/**
 * {@link https://leetcode.com/problems/construct-k-palindrome-strings | 1400. Construct K Palindrome Strings}
 *
 * Topics: Hash Table | String | Greedy | Counting
 */
export function canConstruct(s: string, k: number): boolean {
  if (s.length < k) return false
  if (s.length === k) return true

  const cnt = Array(26).fill(0)
  for (const x of s) {
    cnt[x.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  let odds = 0
  for (const x of cnt) {
    odds += x & 1
  }

  return odds <= k
}
