/**
 * {@link https://leetcode.com/problems/continuous-subarrays | 2762. Continuous Subarrays}
 *
 * Topics: Sliding Window | Array | Ordered Set | Queue | Heap (Priority Queue) | Monotonic Queue | Two Pointers | Ordered Map | Hash Table | Dynamic Programming | Counting | Math | Binary Search Tree | Segment Tree | Tree | Stack | Binary Search | Monotonic Stack | Memoization | Iterator | Greedy | Depth-First Search | Recursion
 */
export function continuousSubarrays(nums: number[]): number {
  const [minQ, maxQ]: [number[], number[]] = [[], []]
  const n = nums.length
  let res = 0
  let l = 0

  for (let i = 0; i < n; i++) {
    const x = nums[i]
    while (minQ.length && nums[minQ.at(-1)!] > x) minQ.pop()
    while (maxQ.length && nums[maxQ.at(-1)!] < x) maxQ.pop()
    minQ.push(i)
    maxQ.push(i)

    while (minQ.length && maxQ.length && nums[maxQ[0]] - nums[minQ[0]] > 2) {
      if (maxQ[0] < minQ[0]) {
        l = maxQ[0] + 1
        maxQ.shift()
      } else {
        l = minQ[0] + 1
        minQ.shift()
      }
    }

    res += i - l + 1
  }

  return res
}
