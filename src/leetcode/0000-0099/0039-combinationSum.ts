/**
 * 39. Combination Sum
 * {@link https://leetcode.com/problems/combination-sum/ | Link}
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const n = candidates.length
  const res: number[][] = []

  const dfs = (curr: number[], sum: number, start: number) => {
    if (sum === target) {
      res.push([...curr])
      return
    }

    for (let i = start; i < n; i++) {
      const x = candidates[i]
      sum += x

      if (sum > target) break

      curr.push(x)
      dfs(curr, sum, i)
      sum -= x
      curr.pop()
    }
  }

  dfs([], 0, 0)

  return res
}
