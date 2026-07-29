/**
 * {@link https://leetcode.com/problems/apply-operations-to-an-array | 2460. Apply Operations to an Array}
 *
 * Topics: Array | Two Pointers | Simulation
 */
export function applyOperations(nums: number[]): number[] {
  const n = nums.length
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  const res = Array(n).fill(0)
  let i = 0
  for (const x of nums) {
    if (x) res[i++] = x
  }

  return res
}

export function applyOperations2(nums: number[]): number[] {
  const n = nums.length
  const res = Array(n).fill(0)
  let j = 0

  for (let i = 0; i < n - 1; i++) {
    if (nums[i]) {
      if (nums[i] === nums[i + 1]) {
        res[j++] = nums[i] * 2
        nums[i + 1] = 0
      } else res[j++] = nums[i]
    }
  }

  if (nums[n - 1]) res[j] = nums[n - 1]

  return res
}
