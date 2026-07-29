/**
 * 1496. Path Crossing
 * {@link https://leetcode.com/problems/path-crossing/ | Link}
 */
export function isPathCrossing(path: string): boolean {
  let [x, y] = [0, 0]
  const seen = new Set(['0.0'])

  for (const s of path) {
    if (s === 'N') y++
    else if (s === 'S') y--
    else if (s === 'E') x++
    else x--

    const key = `${x}.${y}`
    if (seen.has(key)) return true
    seen.add(key)
  }

  return false
}
