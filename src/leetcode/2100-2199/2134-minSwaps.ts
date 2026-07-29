/**
 * 2134. Minimum Swaps to Group All 1's Together II
 * {@link https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/ | Link}
 *
 * Topics: Array | Sliding Window | Prefix Sum
 */

/** Sliding window */
export function minSwaps(nums: number[]): number {
  const n = nums.length
  const k = nums.reduce((a, b) => a + b, 0)
  let c = k - nums.slice(0, k).reduce((a, b) => a + b, 0)
  let min = c

  for (let i = k; i < n + k; i++) {
    c += nums[i - k] - nums[i % n]
    min = Math.min(min, c)
  }

  return min
}

/** Prefix Sum */
export function minSwaps2(nums: number[]): number {
  const n = nums.length

  const getMin = (x: 0 | 1) => {
    const prefixSum = Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
      prefixSum[i] = prefixSum[i - 1] + (nums[i - 1] === x)
    }

    const length = prefixSum[n]
    let res = Number.POSITIVE_INFINITY
    for (let l = 0, r = length; r <= n; l++, r++) {
      const min = length - (prefixSum[r] - prefixSum[l])
      res = Math.min(res, min)
    }

    return res
  }

  return Math.min(getMin(0), getMin(1))
}

/** Sliding window, the 1st approach */
export function minSwaps3(nums: number[]): number {
  const n = nums.length
  const ones = nums.reduce((a, b) => a + b)
  let [c, min, l, r] = [0, 0, 0, 0]

  if (ones === 0 || ones === n) return 0

  while (r < ones) {
    if (nums[r++] === 0) c++
  }

  min = c
  l = r - ones
  const end = l

  do {
    if (nums[r++] === 0) c++
    if (nums[l++] === 0) c--
    min = Math.min(min, c)

    if (r === n) r = 0
    if (l === n) l = 0
  } while (l !== end)

  return min
}
