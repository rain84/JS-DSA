/**
 * {@link https://leetcode.com/problems/permutation-in-string | 567. Permutation in String}
 *
 * Topics: Hash Table | Two Pointers | String | Sliding Window
 */
export function checkInclusion(s1: string, s2: string): boolean {
  const [n, m] = [s1.length, s2.length]
  if (n > m) return false

  const [cnt1, cnt2] = [Array(26).fill(0), Array(26).fill(0)]
  const c = (ch: string) => ch.charCodeAt(0) - 97
  let [sum1, sum2, i] = [0, 0, 0]

  for (const x of s1) {
    const code = c(x)
    cnt1[code]++
    sum1 += code
  }

  for (; i < n; i++) {
    const code = c(s2[i])
    cnt2[code]++
    sum2 += code
  }

  do {
    if (sum1 === sum2) {
      let j = 26
      while (j-- && cnt1[j] === cnt2[j]);
      if (j < 0) return true
    }

    if (i < m) {
      const [first, next] = [c(s2[i - n]), c(s2[i])]
      sum2 += next - first
      cnt2[first]--
      cnt2[next]++
    }
  } while (i++ < m)

  return false
}
