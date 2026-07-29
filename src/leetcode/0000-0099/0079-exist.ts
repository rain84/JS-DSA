/**
 * 79. Word Search
 * {@link https://leetcode.com/problems/word-search/ | Link}
 */
export function exist(board: string[][], word: string): boolean {
  const [m, n] = [board.length, board[0].length]
  const dir = [1, 0, -1, 0, 1]
  const dfs = (i: number, j: number, k: number): boolean => {
    if (k === word.length) return true
    if (board[i][j] !== word[k]) return false

    const ch = board[i][j]
    board[i][j] = ''

    for (let d = 0; d < 4; d++) {
      const [y, x] = [i + dir[d], j + dir[d + 1]]
      if (x < 0 || x === n || y < 0 || y === m) continue
      if (dfs(y, x, k + 1)) return true
    }

    board[i][j] = ch

    if (k === word.length - 1) return true

    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}
