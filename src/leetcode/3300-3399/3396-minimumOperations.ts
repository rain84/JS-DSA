/**
 * {@link https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct | 3396. Minimum Number of Operations to Make Elements in Array Distinct}
 *
 * Topics: Array | Hash Table
 */
export function minimumOperations(nums: number[]): number {
  const cnt = Array(101).fill(0)

  for (let i = nums.length - 1; i >= 0; i--) {
    if (cnt[nums[i]]) {
      return Math.ceil((i + 1) / 3)
    }

    cnt[nums[i]]++
  }

  return 0
}

export function minimumOperations2(nums: number[]): number {
  const n = nums.length
  const cnt = Array(101).fill(0)
  for (const x of nums) cnt[x]++
  let distinctCnt = cnt.filter(Boolean).length

  for (let i = 0, c = 0; i < n; i++) {
    if (distinctCnt === n - i) return c
    if (i % 3 === 0) c++

    const x = nums[i]
    cnt[x]--
    if (cnt[x] === 0) distinctCnt--
  }

  return 0
}
