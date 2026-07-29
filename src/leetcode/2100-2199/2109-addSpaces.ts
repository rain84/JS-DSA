/**
 *
 * {@link https://leetcode.com/problems/adding-spaces-to-a-string | 2109. Adding Spaces to a String}
 * Topics: Array | Two Pointers | String | Simulation
 *
 */
export function addSpaces(s: string, spaces: number[]): string {
  const n = s.length + spaces.length
  const res = Array(n + spaces.length)

  for (let i = 0, j = 0; i < n; i++) {
    if (i === spaces[j]) {
      res.push(' ')
      j++
    }
    res.push(s[i])
  }

  return res.join('')
}
