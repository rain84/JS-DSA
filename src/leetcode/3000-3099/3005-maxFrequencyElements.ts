/**
 * 3005. Count Elements With Maximum Frequency
 * {@link https://leetcode.com/problems/count-elements-with-maximum-frequency/ | Link}
 */
export function maxFrequencyElements(nums: number[]): number {
  const hash: Record<number, number> = {}
  let res = 0
  let max = 0

  for (const x of nums) {
    hash[x] = ++hash[x] || 1
  }

  for (const key in hash) {
    if (hash[key] > max) res = max = hash[key]
    else if (hash[key] === max) res += max
  }

  return res
}

export function maxFrequencyElements2(nums: number[]): number {
  const hash = Array(101).fill(0)
  let res = 0
  let max = 0

  for (const x of nums) hash[x]++

  for (const x of hash) {
    if (x > max) res = max = x
    else if (x === max) res += max
  }

  return res
}
