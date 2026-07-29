/**
 * {@link https://leetcode.com/problems/count-symmetric-integers | 2843. Count Symmetric Integers}
 *
 * TopicsЖ Math Ё Enumeration
 */
export function countSymmetricIntegers(low: number, high: number): number {
  const isSymmetric = (x: number) => {
    const s = String(x)
    const n = s.length
    let [l, r] = [0, 0]

    if (n & 1) return false
    for (let i = 0; i < n / 2; i++) {
      l += +s[i]
      r += +s[n - i - 1]
    }

    return l === r
  }

  let res = 0
  for (let i = low; i <= high; i++) {
    res += +isSymmetric(i)
  }

  return res
}
