/**
 * {@link https://leetcode.com/problems/special-array-i | 3151. Special Array I}
 *
 * Topics: Array
 */
export function isArraySpecial(nums: number[]): boolean {
  let x = nums[0] & 1

  for (let i = 1; i < nums.length; i++) {
    const next = nums[i] & 1
    if (x === next) return false
    x = next
  }

  return true
}

export function isArraySpecial3(nums: number[]): boolean {
  const n = nums.length

  for (let i = 1; i < n; i++) {
    if ((nums[i - 1] & 1) === (nums[i] & 1)) return false
  }

  return true
}

export function isArraySpecial2(nums: number[]): boolean {
  const n = nums.length

  for (let i = 1; i < n; i++) {
    if (!((nums[i - 1] ^ nums[i]) & 1)) return false
  }

  return true
}
