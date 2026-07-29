/**
 * {@link https://leetcode.com/problems/find-the-punishment-number-of-an-integer | 2698. Find the Punishment Number of an Integer}
 *
 * Topics: Math | Backtracking
 */
export function punishmentNumber(n: number): number {
  let res = 0

  const check = (x: number, target: number) => {
    if (x === target) return true
    if (!x || target < 0) return false

    for (let i = 10, l = 1, r = 0; l; i *= 10) {
      r = x % i
      l = (x / i) | 0

      if (check(l, target - r)) return true
    }

    return false
  }

  for (let i = 1, x = i; i <= n; i++, x = i * i) {
    if (check(x, i)) {
      res += x
    }
  }

  return res
}
