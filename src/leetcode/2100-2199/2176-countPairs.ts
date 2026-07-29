/**
 * {@link https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array | 2176. Count Equal and Divisible Pairs in an Array}
 *
 * Topics: Array
 */
export function countPairs(nums: number[], k: number): number {
  const n = nums.length
  let res = 0

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        res++
      }
    }
  }

  return res
}
