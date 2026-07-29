/**
 * 40. Combination Sum II
 * {@link https://leetcode.com/problems/combination-sum-ii/ | Link}
 *
 * Topics: Array | Backtracking
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)

  const n = candidates.length
  const res: number[][] = []
  const path: number[] = []

  const dfs = (j: number, s: number) => {
    if (s <= 0 || s < candidates[j]) {
      if (!s) res.push([...path])
      return
    }

    for (let i = j; i < n; i++) {
      if (i > j && candidates[i] === candidates[i - 1]) continue

      path.push(candidates[i])
      dfs(i + 1, s - candidates[i])
      path.pop()
    }
  }

  dfs(0, target)

  return res
}
