/**
 * {@link https://leetcode.com/problems/take-k-of-each-character-from-left-and-right | 2516. Take K of Each Character From Left and Right}
 *
 * Topics: Hash Table | String | Sliding Window
 */
export function takeCharacters(s: string, k: number): number {
  const cnt: Record<string, number> = { a: 0, b: 0, c: 0 }
  for (const x of s) cnt[x]++
  const values = Object.values(cnt)
  if (values.length < 3 || values.some((x) => x < k)) return -1

  let [l, r, max] = [0, 0, 0]
  cnt
  while (r < s.length) {
    if (cnt[s[r]] > k) {
      r
      k
      console.log(s[r])
      cnt[s[r]]--
      r++
      max = Math.max(max, r - l)
      console.log(r)
      console.log(l)
      console.log(max)
    }

    if (cnt[s[r]] === k) {
      while (l < r) cnt[s[l++]]++
      r++
    }
  }

  max

  return s.length - max
}

// console.log(takeCharacters('abc', 0))
console.log(takeCharacters('aabaaaacaabc', 2))
// 8
