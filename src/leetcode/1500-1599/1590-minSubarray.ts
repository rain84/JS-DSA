/**
 * {@link https://leetcode.com/problems/make-sum-divisible-by-p | 1590. Make Sum Divisible by P}
 *
 * Topics: Array | Hash Table | Prefix Sum
 */
export function minSubarray(nums: number[], p: number): number {
  const n = nums.length
  let target = 0

  for (const x of nums) target += x
  target %= p

  if (target === 0) return 0

  const mod = new Map([[0, -1]])
  let [current, res] = [0, n]

  for (let i = 0; i < n; i++) {
    current = (current + nums[i]) % p
    const needed = (current - target + p) % p

    if (mod.has(needed)) {
      res = Math.min(res, i - mod.get(needed)!)
    }
    mod.set(current, i)
  }

  return res === n ? -1 : res
}
