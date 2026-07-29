/**
 * {@link https://leetcode.com/problems/lemonade-change/ | 860. Lemonade Change}
 *
 * Topics: Array | Greedy
 */

/*
 * Performance (by 'utils/perf.ts'),
 * args = [[5, 5, 10, 10, 5, 20, 5, 10, 5, 5]]
 *
 * ───────────────────────────────────────────────────────────────────────────
 *  (index)  Function          ops/sec  Time (ms)  Iterations  Speed (%)
 * ───────────────────────────────────────────────────────────────────────────
 *  1        lemonadeChange    530427   1885       1000000     100.00
 *  2        lemonadeChange2   321119   3114       1000000     60.54
 * ───────────────────────────────────────────────────────────────────────────
 */

export function lemonadeChange(bills: number[]): boolean {
  let [five, ten] = [0, 0]

  for (const x of bills) {
    switch (x) {
      case 5:
        five++
        break

      case 10:
        five--
        ten++
        break

      case 20:
        if (ten) {
          five--
          ten--
        } else five -= 3
        break
    }

    if (five < 0) return false
  }

  return true
}

/** One-liner */
export const lemonadeChange2 = (bills: number[], f = 0, t = 0): boolean =>
  bills.every(
    (x) => (
      (!(x ^ 5) && ++f) ||
        (!(x ^ 10) && (--f, ++t)) ||
        (!(x ^ 20) && (t ? (f--, t--) : (f -= 3), 1)),
      f >= 0
    )
  )
