/**
 * 2389. Longest Subsequence With Limited Sum
 * {@link https://leetcode.com/problems/longest-subsequence-with-limited-sum/
 * | Link}
 *
 * Sort + Prefix Sum + Binary search
 */
export function answerQueries(nums: number[], queries: number[]): number[] {
  const n = nums.length
  const res: number[] = []
  const binarySearch = (x: number) => {
    let [l, r] = [0, n - 1]

    while (l <= r) {
      const mid = (l + r) >> 1

      if (nums[mid] <= x) l = mid + 1
      else r = mid - 1
    }

    return l
  }

  nums.sort((a, b) => a - b)
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1]
  }

  for (const x of queries) {
    res.push(binarySearch(x))
  }

  return res
}

/** Sort + Sum */
export function answerQueries3(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b)
  const res = Array(queries.length)
  const n = nums.length
  const idx = queries.map((_, i) => i)

  idx.sort((a, b) => queries[a] - queries[b])

  let [j, sum] = [0, 0]
  for (const i of idx) {
    while (j < n && sum + nums[j] <= queries[i]) {
      sum += nums[j++]
    }

    res[i] = j
  }

  return res
}

/** Sort + Prefix Sum */
export function answerQueries2(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b)
  const [n, m] = [nums.length, queries.length]
  const res = Array(queries.length).fill(0)
  const prefixSum = [nums[0]]

  for (let i = 1; i < n; i++) {
    prefixSum[i] = nums[i] + prefixSum[i - 1]
  }

  for (let i = 0; i < m; i++) {
    const x = queries[i]
    for (let j = 0; j < n; j++) {
      if (prefixSum[j] <= x) res[i] = j + 1
      else break
    }
  }

  return res
}
