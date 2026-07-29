/**
 * 974. Subarray Sums Divisible by K
 * {@link https://leetcode.com/problems/subarray-sums-divisible-by-k/ | Link}
 *
 * This task blew up my mind..
 */
export function subarraysDivByK(nums: number[], k: number): number {
  const remainders = Array(k).fill(0)
  let sum = 0
  let res = 0

  remainders[0] = 1

  for (const val of nums) {
    sum = (sum + ((val % k) + k)) % k
    res += remainders[sum]
    remainders[sum]++
  }

  return res
}
