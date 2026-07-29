/**
 * 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
 * {@link https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/ | Link}
 */
export function minDifference(nums: number[]): number {
  if (nums.length < 5) return 0
  nums.sort((a, b) => a - b)
  let res = Number.POSITIVE_INFINITY

  for (let i = 0; i < 4; i++) {
    res = Math.min(res, nums.at(i - 4)! - nums[i])
  }

  return res
}
