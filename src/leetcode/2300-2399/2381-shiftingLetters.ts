/**
 * {@link https://leetcode.com/problems/shifting-letters-ii | 2381. Shifting Letters II}
 *
 * Topics: Array | String | Prefix Sum
 */
export function shiftingLetters(s: string, shifts: number[][]): string {
  const n = s.length
  const arr = Array(n).fill(0)
  const res = [...s]

  for (const [i, j, dir] of shifts) {
    const delta = dir ? 1 : -1
    arr[i] += delta
    arr[j + 1] -= delta
  }

  let c = 0
  const aCode = 'a'.charCodeAt(0)

  res.forEach((ch, i) => {
    c += arr[i]
    const j = ch.charCodeAt(0) - aCode + c
    res[i] = String.fromCharCode((((j % 26) + 26) % 26) + aCode)
  })

  return res.join('')
}
