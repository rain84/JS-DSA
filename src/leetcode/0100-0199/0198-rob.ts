/**
 * 198. House Robber
 * {@link https://leetcode.com/problems/house-robber/ | Link}
 *
 * Topics: Array | Dynamic Programming
 *
 * Performance (by 'utils/perf.ts')
 * ───────────────────────────────────────────────────────────────────────────
 *  (index)  Function      ops/sec  Time (ms)  Iterations  Speed (%)
 * ───────────────────────────────────────────────────────────────────────────
 *  1        rob           2214696  45         100000      100.00
 *  2        rob2          669214   149        100000      30.22
 * ───────────────────────────────────────────────────────────────────────────
 */

/** Bottom-up approach, tabulation */
export function rob(nums: number[]): number {
  const n = nums.length

  if (n === 1) return nums[0]

  let prev = nums[0]
  let res = Math.max(nums[0], nums[1])

  for (let i = 2; i < n; i++) {
    ;[res, prev] = [Math.max(res, prev + nums[i]), res]
  }

  return res
}

/** Top-down approach, recursion */
export function rob2(nums: number[]): number {
  const n = nums.length
  const f = Array(n).fill(-1)

  const dfs = (i: number): number => {
    if (i >= n) return 0
    if (f[i] === -1) f[i] = Math.max(nums[i] + dfs(i + 2), dfs(i + 1))
    return f[i]
  }

  return dfs(0)
}
