/**
 * 885. Spiral Matrix III
 * {@link https://leetcode.com/problems/spiral-matrix-iii/ | Link}
 *
 * Topics: Array | Matrix | Simulation
 */
export function spiralMatrixIII(
  rows: number,
  cols: number,
  rStart: number,
  cStart: number
): number[][] {
  // prettier-ignore
  const dir = [[1,0],[0,1],[-1,0],[0,-1]]
  let [x, y, i, size] = [cStart, rStart, 0, 0]
  const res: number[][] = [[y, x]]
  const total = rows * cols

  while (res.length < total) {
    if (i % 2 === 0) size++

    for (let j = 0; res.length < total && j < size; j++) {
      x += dir[i][0]
      y += dir[i][1]

      if (0 <= x && x < cols && 0 <= y && y < rows) {
        res.push([y, x])
      }
    }

    i = (i + 1) % 4
  }

  return res
}
