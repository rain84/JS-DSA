/**
 * 1293. Shortest Path in a Grid with Obstacles Elimination
 * {@link https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/ | Link}
 */
export function shortestPath(grid: number[][], k: number): number {
  const n = grid.length
  const m = grid[0].length
  const seen = new Set<string>()
  const dirs = [0, 1, 0, -1, 0]
  let q: Point[] = [[0, 0, k]]
  let ans = 0

  if (k >= n + m - 3) return n + m - 2

  while (q.length) {
    const nextQ: Point[] = []
    ans++

    for (const [i, j, k] of q) {
      const key = [i, j, k].toString()

      if (seen.has(key)) continue
      seen.add(key)

      for (let d = 0; d < 4; d++) {
        const [y, x] = [i + dirs[d], j + dirs[d + 1]]
        if (y === n - 1 && x === m - 1) return ans

        const v = grid[y]?.[x]
        if (v === 0) nextQ.push([y, x, k])
        else if (v === 1 && k) nextQ.push([y, x, k - 1])
      }
    }

    q = nextQ
  }

  return -1
}

type Point = [number, number, number]
