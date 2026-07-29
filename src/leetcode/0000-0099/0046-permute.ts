/**
 * {@link https://leetcode.com/problems/permutations/ | 46. Permutations}
 *
 * Topics: Array | Backtracking
 */

/*
 * Performance (by 'utils/perf.ts'), args = [[1, 2, 3, 4, 5]]
 *
 * ───────────────────────────────────────────────────────────────────────────
 *  (index)  Function  ops/sec  Time (ms)  Iterations  Speed (%)
 * ───────────────────────────────────────────────────────────────────────────
 *  1        permute   8180     12224      100000      100.00
 *  2        permute2  6466     15464      100000      79.05
 *  2        permute3  5343     18714      100000      65.32
 * ───────────────────────────────────────────────────────────────────────────
 */

export function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const n = nums.length

  const dfs = (j: number) => {
    if (j === n) {
      res.push([...nums])
    }

    for (let i = j; i < n; i++) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      dfs(j + 1)
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  dfs(0)

  return res
}

export function permute2(nums: number[]): number[][] {
  const res: number[][] = []
  const path: number[] = []
  const n = nums.length

  const dfs = (nums: number[]) => {
    if (path.length === n) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      path.push(nums[i])
      dfs([...nums.slice(0, i), ...nums.slice(i + 1)])
      path.pop()
    }
  }

  dfs(nums)

  return res
}

export function permute3(nums: number[]): number[][] {
  const res: number[][] = []

  const dfs = (curr: number[] = []) => {
    if (curr.length === nums.length) {
      res.push([...curr])
      return
    }

    for (const i of nums) {
      if (curr.includes(i)) continue

      curr.push(i)
      dfs(curr)
      curr.pop()
    }
  }

  dfs()

  return res
}
