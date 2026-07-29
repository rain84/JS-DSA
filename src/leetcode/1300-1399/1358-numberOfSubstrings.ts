/**
 * {@link https://leetcode.com/problems/number-of-substrings-containing-all-three-characters | 1358. Number of Substrings Containing All Three Characters}
 *
 * Topics: Hash Table | String | Sliding Window
 */
export function numberOfSubstrings(s: string): number {
  const n = s.length
  const cnt = new Map<string, number>()
  let [i, j, res] = [0, 0, 0]

  while (i < n) {
    while (j < n && cnt.size !== 3) {
      const ch = s[j++]
      cnt.set(ch, (cnt.get(ch) ?? 0) + 1)
    }

    const ch = s[i++]
    if (cnt.size === 3) {
      res += n - j + 1
    }

    if (cnt.has(ch)) {
      const x = cnt.get(ch)! - 1
      if (x) cnt.set(ch, x)
      else cnt.delete(ch)
    }
  }

  return res
}
