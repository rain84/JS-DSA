/**
 * {@link https://leetcode.com/problems/count-the-number-of-fair-pairs | 2563. Count the Number of Fair Pairs}
 */
export function countFairPairs(nums: number[], lower: number, upper: number): number {
  const n = nums.length
  let res = 0

  const search = (x: number, l: number, r = n - 1) => {
    while (l <= r) {
      const mid = (l + r) >> 1
      if (nums[mid] < x) l = mid + 1
      else r = mid - 1
    }

    return l
  }

  nums.sort((a, b) => a - b)
  for (let i = 0; i < n; i++) {
    const low = search(lower - nums[i], i + 1)
    const high = search(upper - nums[i] + 1, i + 1)
    res += high - low
  }

  return res
}
