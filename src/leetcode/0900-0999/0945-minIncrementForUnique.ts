/**
 * 945. Minimum Increment to Make Array Unique
 * {@link https://leetcode.com/problems/minimum-increment-to-make-array-unique/ | Link}
 */
export function minIncrementForUnique(nums: number[]): number {
  const n = Math.max(...nums) + 1 + nums.length
  const cnt: number[] = Array.from({ length: n }, () => 0)
  let res = 0

  for (const x of nums) {
    cnt[x]++
  }

  for (let i = 0; i < n; i++) {
    if (cnt[i] <= 1) continue

    const diff = cnt[i] - 1
    cnt[i + 1] += diff
    res += diff
    cnt[i] = 1
  }

  return res
}

/** 1st working solution,
 * throws "Time Limit Exceeded" exception on LeetCode
 */
export function minIncrementForUnique2(nums: number[]): number {
  let res = 0
  const cnt: Record<number, number> = {}
  const unique = new Set(nums)

  nums.sort((a, b) => a - b)

  for (const x of nums) {
    if (cnt[x] !== undefined) {
      let nextUnique = (cnt[x] || x) + 1

      while (unique.has(nextUnique)) {
        nextUnique++
      }
      res += nextUnique - x
      unique.add(nextUnique)
    }

    cnt[x] ??= 0
  }

  return res
}
