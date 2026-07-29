/**
 * 1636. Sort Array by Increasing Frequency
 * {@link https://leetcode.com/problems/sort-array-by-increasing-frequency/ | Link}
 */
export function frequencySort(nums: number[]): number[] {
  const cnt = new Map<number, number>()
  for (const x of nums) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1)
  }

  nums.sort((a, b) => cnt.get(a)! - cnt.get(b)! || b - a)

  return nums
}
