/**
 * 2294. Partition Array Such That Maximum Difference Is K
 * {@link https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/ | Link}
 */
export function partitionArray(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let c = 1
  let max = nums[0] + k

  for (const x of nums) {
    if (x > max) {
      c++
      max = x + k
    }
  }

  return c
}
