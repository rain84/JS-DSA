/**
 * {@link https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three | 1780. Check if Number is a Sum of Powers of Three}
 *
 * Topics: Math
 */
export function checkPowersOfThree(n: number): boolean {
  const set = new Set<number>()
  let [c, x] = [0, n]

  while (n > 1) {
    x /= 3
    if (x < 1) return false
    c++

    if ((x | 0) === 1) {
      if (set.has(c)) return false
      set.add(c)
      n -= 3 ** c
      x = n
      c = 0
    }
  }

  return true
}
