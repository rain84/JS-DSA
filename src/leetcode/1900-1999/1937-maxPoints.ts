/**
 * {@link https://leetcode.com/problems/maximum-number-of-points-with-cost/ | 1937. Maximum Number of Points with Cost}
 *
 * Topics: Array | Dynamic Programming
 */
export function maxPoints(points: number[][]): number {
  const [m, n] = [points.length, points[0].length]

  let prev: number[] = []
  let res = [...points[0]]

  for (let i = 1; i < m; i++) {
    prev = res
    res = Array(n).fill(0)

    for (let j = 0; j < n; j++) {
      res[j] = 0
      for (let k = 0; k < n; k++) {
        res[j] = Math.max(res[j], points[i][j] + prev[k] - Math.abs(k - j))
      }
    }
  }

  return Math.max(...res)
}

console.log(
  maxPoints([
    [2, 2],
    [2, 2],
    [2, 2],
  ])
)
