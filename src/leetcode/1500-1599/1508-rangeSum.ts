/**
 * 1508. Range Sum of Sorted Subarray Sums
 * {@link https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/ | Link}
 *
 * Topics: Array | Two Pointers | Binary Search | Sorting
 */

/** Brute Force */
export function rangeSum(nums: number[], n: number, left: number, right: number): number {
  let arr = Array((n * (n + 1)) / 2).fill(0)
  const mod = 10 ** 9 + 7

  for (let i = 0, sum = 0, k = 0; i < n; i++, sum = 0) {
    for (let j = i; j < n; j++, k++) {
      sum += nums[j]
      arr[k] = sum
    }
  }

  let res = 0
  arr = arr.sort((a, b) => a - b).slice(left - 1, right)
  for (const x of arr) {
    res += x
  }

  return res % mod
}

/** Binary Search */
export function rangeSum2(nums: number[], n: number, left: number, right: number): number {
  const min = Math.min(...nums)
  const max = nums.reduce((sum, num) => sum + num, 0) + 1
  const mod = 10 ** 9 + 7

  const countAndSum = (target: number): { count: number; sum: number } => {
    let [count, cur, sum, totalSum] = [0, 0, 0, 0]

    for (let j = 0, i = 0; j < n; ++j) {
      cur += nums[j]
      sum += nums[j] * (j - i + 1)
      while (cur > target) {
        sum -= cur
        cur -= nums[i++]
      }
      count += j - i + 1
      totalSum += sum
    }
    return { count, sum: totalSum }
  }

  const sumOfFirstK = (k: number): number => {
    let [l, r] = [min, max]

    while (l < r) {
      const mid = l + Math.floor((r - l) / 2)
      const { count } = countAndSum(mid)
      if (count >= k) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    const { count, sum } = countAndSum(l)
    return (sum - l * (count - k)) % mod
  }

  return (sumOfFirstK(right) - sumOfFirstK(left - 1)) % mod
}
