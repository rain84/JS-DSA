/**
 * {@link https://leetcode.com/problems/maximum-width-ramp | 962. Maximum Width Ramp}
 *
 * Topics: Array | Stack | Monotonic Stack
 */

/** O(n), monotonic stack */
export function maxWidthRamp(nums: number[]): number {
  let [res, n] = [0, nums.length]
  const stk: number[] = []

  for (let i = 0; i < n - 1; i++) {
    if (stk.length === 0 || nums[stk.at(-1)!] > nums[i]) {
      stk.push(i)
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    while (stk.length && nums[stk.at(-1)!] <= nums[i]) {
      res = Math.max(res, i - stk.pop()!)
    }
    if (stk.length === 0) break
  }

  return res
}

/** O(n*log(n)), sorting */
export function maxWidthRamp2(nums: number[]): number {
  const idx = nums.map((x, i) => [x, i]).sort(([a], [b]) => a - b)
  let [res, j] = [0, nums.length]

  for (const [_, i] of idx) {
    res = Math.max(res, i - j)
    j = Math.min(j, i)
  }

  return res
}

/** O(n^2), TLE */
export function maxWidthRamp3(nums: number[]): number {
  let [res, n] = [0, nums.length]

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] <= nums[j]) {
        res = Math.max(res, j - i)
      }
    }
  }

  return res
}

/** One-liner */
export const maxWidthRamp4 = (nums: number[], res = 0, j = 10 ** 5): number => (
  nums
    .map((x, i) => [x, i])
    .sort(([a], [b]) => a - b)
    .map(([_, i]) => ((res = Math.max(res, i - j)), (j = Math.min(j, i)))),
  res
)
