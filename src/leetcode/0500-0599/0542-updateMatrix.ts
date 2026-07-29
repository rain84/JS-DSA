/**
 * 542. 01 Matrix
 * {@link https://leetcode.com/problems/01-matrix/ | Link}
 */
export function updateMatrix(mat: number[][]): number[][] {
  let q: [number, number][] = []
  const n = mat.length
  const m = mat[0].length
  const res = Array.from({ length: n }, () => Array(m).fill(-1))
  const dirs = [0, 1, 0, -1, 0]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        q.push([i, j])
        res[i][j] = 0
      }
    }
  }

  let depth = 0
  while (q.length) {
    const nextQ: [number, number][] = []
    depth++

    for (const [i, j] of q) {
      for (let k = 0; k < 4; k++) {
        const y = dirs[k] + i
        const x = dirs[k + 1] + j

        if (mat[y]?.[x] === 1 && res[y][x] === -1) {
          res[y][x] = depth
          nextQ.push([y, x])
        }
      }
    }

    q = nextQ
  }

  return res
}
