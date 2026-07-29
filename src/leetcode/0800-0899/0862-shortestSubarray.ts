/**
 * {@link https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k | 862. Shortest Subarray with Sum at Least K}
 *
 * Topics: Array | Binary Search | Queue | Sliding Window | Heap (Priority Queue) | Prefix Sum | Monotonic Queue
 */
export function shortestSubarray(nums: number[], k: number): number {
  const [n, MAX] = [nums.length, Number.POSITIVE_INFINITY]
  const prefixSum = Array(n + 1).fill(0)
  const deque: number[] = []
  let res = MAX

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }

  for (let i = 0; i < n + 1; i++) {
    while (deque.length && prefixSum[i] - prefixSum[deque[0]] >= k) {
      res = Math.min(res, i - deque.shift()!)
    }

    while (deque.length && prefixSum[i] <= prefixSum[deque.at(-1)!]) {
      deque.pop()
    }

    deque.push(i)
  }

  return res === MAX ? -1 : res
}
