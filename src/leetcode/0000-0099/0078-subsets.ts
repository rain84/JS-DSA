/**
 * 78. Subsets
 * {@link https://leetcode.com/problems/subsets/ | Link}
 */
export function subsets(nums: number[]): number[][] {
  const n = nums.length
  const res: number[][] = []

  const dfs = (curr: number[] = [], start = 0) => {
    res.push([...curr])
    if (curr.length === nums.length) return

    for (let i = start; i < n; i++) {
      curr.push(nums[i])
      dfs(curr, i + 1)
      curr.pop()
    }
  }

  dfs()

  return res
}
