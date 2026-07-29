/**
 * {@link https://leetcode.com/problems/partition-equal-subset-sum | 416. Partition Equal Subset Sum}
 *
 * Topics: Array | Dynamic Programming
 */
export function canPartition(nums: number[]): boolean {
  let m = nums.reduce((a, b) => a + b, 0)
  if (m & 1) return false
  m /= 2

  const f = Array(m + 1).fill(false)
  f[0] = true

  for (const x of nums) {
    for (let i = m; i >= x; i--) {
      f[i] ||= f[i - x]
    }
  }

  return f[m]
}
