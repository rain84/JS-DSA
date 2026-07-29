/**
 * {@link https://leetcode.com/problems/divide-array-into-equal-pairs | 2206. Divide Array Into Equal Pairs}
 *
 * Topics: Array | Hash Table | Bit Manipulation | Counting
 */
export function divideArray(nums: number[]): boolean {
  const cnt = Array(501).fill(0)

  for (const x of nums) {
    cnt[x]++
  }

  for (const x of cnt) {
    if (x & 1) return false
  }

  return true
}
