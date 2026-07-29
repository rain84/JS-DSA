/**
 * {@link https://leetcode.com/problems/convert-1d-array-into-2d-array/ | 2022. Convert 1D Array Into 2D Array
 *
 * Topics: Array | Matrix | Simulation}
 */
export function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (m * n !== original.length) return []
  const res: number[][] = []

  for (let i = 0; i < m * n; i += n) {
    res.push(original.slice(i, i + n))
  }

  return res
}

export function construct2DArray2(original: number[], m: number, n: number): number[][] {
  const l = original.length
  if (m * n !== l) return []

  const res: number[][] = Array.from({ length: m }, () => Array(n).fill(0))

  for (let i = 0; i < l; i++) {
    res[(i / n) | 0][i % n] = original[i]
  }

  return res
}
