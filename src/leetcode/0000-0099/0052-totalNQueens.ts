/**
 * 52. N-Queens II
 * {@link https://leetcode.com/problems/n-queens-ii/ | Link}
 */
export function totalNQueens(n: number): number {
  let res = 0
  const pos: [number, number][] = []
  const cols = Array(n).fill(false)

  const dfs = (j: number) => {
    if (pos.length === n) {
      res++
      return
    }

    for (let i = 0; i < n; i++) {
      if (cols[i] || pos.some(([x, y]) => Math.abs(x - i) === Math.abs(y - j))) continue

      pos.push([i, j])
      cols[i] = true
      dfs(j + 1)
      pos.pop()
      cols[i] = false
    }

    return res
  }

  dfs(0)

  return res
}
