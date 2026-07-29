/**
 * 330. Patching Array
 * {@link https://leetcode.com/problems/patching-array/ | Link
 */
export function minPatches(nums: number[], n: number): number {
  let x = 1
  let ans = 0
  for (let i = 0; x <= n; ) {
    if (i < nums.length && nums[i] <= x) {
      x += nums[i++]
    } else {
      ++ans
      x *= 2
    }
  }
  return ans
}
