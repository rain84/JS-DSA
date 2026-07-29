/**
 * 1. Two Sum
 * {@link https://leetcode.com/problems/two-sum/submissions/1241159154/ | Link}
 *
 */
export function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    const diff = target - v

    if (map[diff] !== undefined) return [map[diff], i]
    map[v] = i
  }

  return []
}

export function twoSum2(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}
  const n = nums.length

  for (let l = 0, r = n - 1; l <= r; l++, r--) {
    let v = nums[l]
    let diff = target - v

    if (map[diff] !== undefined) return [map[diff], l]
    map[v] = l

    v = nums[r]
    diff = target - v

    if (map[diff] !== undefined) return [map[diff], r]
    map[v] = r
  }

  return []
}
