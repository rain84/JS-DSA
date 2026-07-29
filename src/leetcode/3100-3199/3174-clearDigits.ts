/**
 * {@link https://leetcode.com/problems/clear-digits | 3174. Clear Digits}
 *
 * Topics: String | Stack | Simulation
 */
export function clearDigits(s: string): string {
  const stk: string[] = []

  for (const x of s) {
    if (Number.isNaN(+x)) stk.push(x)
    else stk.pop()
  }

  return stk.join('')
}
