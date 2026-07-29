/**
 * {@link https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k | 3375. Minimum Operations to Make Array Values Equal to K}
 *
 * Topics: Array | Hash Table
 */
export function minOperations(nums: number[], k: number): number {
  const set = new Set([k])

  for (const x of nums) {
    if (x < k) return -1
    set.add(x)
  }

  return set.size - 1
}

export function minOperations2(nums: number[], k: number): number {
  const obj: Record<number, number> = { [k]: k }
  for (const x of nums) {
    obj[x] = x
  }

  const arr = Object.keys(obj).map(Number)
  if (arr[0] >= k) return arr.length - 1

  return -1
}
