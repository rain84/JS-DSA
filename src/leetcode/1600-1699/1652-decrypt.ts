/**
 * {@link https://leetcode.com/problems/defuse-the-bomb/ | 1652. Defuse the Bomb}
 *
 * Topics: Array | Sliding Window
 */
export function decrypt(code: number[], k: number): number[] {
  const n = code.length

  if (!k) return Array(n).fill(0)

  if (k > 0) {
    let sum = code.slice(0, k).reduce((a, b) => a + b, 0)
    return code.map((_, i) => {
      const next = code[(i + n + k) % n]
      const last = code[(i + n) % n]
      sum += next - last
      return sum
    })
  }

  let sum = code.slice(n + k - 1, n - 1).reduce((a, b) => a + b, 0)
  return code.map((_, i) => {
    const next = code[(i + n - 1) % n]
    const last = code[(i + n + k - 1) % n]
    sum += next - last
    return sum
  })
}
