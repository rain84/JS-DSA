/**
 * 752. Open the Lock
 * {@link https://leetcode.com/problems/open-the-lock/ | Link}
 */
export function openLock(deadends: string[], target: string): number {
  const seen = Array<boolean>(10_000)
  const q = [[0, 0, 0, 0, 0]]
  const t = +target

  for (const s of deadends) seen[+s] = true

  for (const [a, b, c, d, step] of q) {
    const key = a * 1000 + b * 100 + c * 10 + d
    if (seen[key]) continue
    seen[key] = true

    if (key === t) return step

    for (let i = 0; i < 4; i++) {
      const next = [a, b, c, d, step + 1]
      const prev = [a, b, c, d, step + 1]
      next[i] = (next[i] + 11) % 10
      prev[i] = (prev[i] + 9) % 10
      q.push(prev, next)
    }
  }

  return -1
}

export function openLock2(deadends: string[], target: string): number {
  const seen = Array<boolean>(10_000)
  const q = [[0, 0]]
  const multiplier = [1, 10, 100, 1000]

  for (const s of deadends) seen[+s] = true

  for (const [val, step] of q) {
    if (seen[val]) continue
    seen[val] = true

    if (val === +target) return step

    // ..and yes, it's a crazy math %)
    for (let i = 0; i < 4; i++) {
      const m = multiplier[i]
      const d = ((val % (m * 10)) / m) | 0
      let next = val
      let prev = val

      next -= d * m
      prev -= d * m

      next += ((d + 11) % 10) * m
      prev += ((d + 9) % 10) * m

      q.push([prev, step + 1], [next, step + 1])
    }
  }

  return -1
}
