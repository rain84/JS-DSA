/**
 * {@link https://leetcode.com/problems/extra-characters-in-a-string/ | 2707. Extra Characters in a String}
 *
 * Topics: Array | Hash Table | String | Dynamic Programming | Trie
 */
export function minExtraChar(s: string, dictionary: string[]): number {
  const dict = new Set(dictionary)
  const n = s.length
  const f = Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    f[i] = f[i - 1] + 1
    for (let j = 0; j < i; j++) {
      if (dict.has(s.slice(j, i))) {
        f[i] = Math.min(f[i], f[j])
      }
    }
  }

  return f[n]
}
