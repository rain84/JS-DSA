/**
 * 719. Find K-th Smallest Pair Distance
 * {@link https://leetcode.com/problems/find-k-th-smallest-pair-distance/ | Link}
 *
 * Topics: Array | Two Pointers | Binary Search | Sorting
 */
export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let [l, r] = [0, nums.at(-1)! - nums[0]]

  const countPairs = (distance: number) => {
    let c = 0

    for (let i = 0, j = 0; i < n - 1; i++) {
      while (j < n && nums[j + 1] - nums[i] <= distance) j++
      c += j - i
    }

    return c
  }

  while (l < r) {
    const m = (l + r) >> 1
    if (countPairs(m) >= k) r = m
    else l = m + 1
  }

  return l
}
