/**
 * {@link https://leetcode.com/problems/sum-of-digits-of-string-after-convert/ | 1945. Sum of Digits of String After Convert}
 *
 * Topics: String | Simulation
 */
export function getLucky(s: string, k: number): number {
  const codeA = 'a'.charCodeAt(0) - 1
  const n = s.length
  let nums = ''

  for (let i = 0; i < n; i++) {
    nums += s.charCodeAt(i) - codeA
  }

  while (k--) {
    let t = 0
    for (const x of nums) {
      t += +x
    }
    nums = String(t)
  }

  return +nums
}
