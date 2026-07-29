/**
 * 216. Combination Sum III
 * {@link https://leetcode.com/problems/combination-sum-iii/ | Link}
 */
export function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []
  const dfs = (curr: number[], sum: number, j: number) => {
    if (curr.length === k) {
      if (sum === n) res.push([...curr])
      return
    }

    for (let i = j; i < 10; i++) {
      if (sum + i > n) continue

      curr.push(i)
      dfs(curr, sum + i, i + 1)
      curr.pop()
    }
  }

  dfs([], 0, 1)

  return res
}
