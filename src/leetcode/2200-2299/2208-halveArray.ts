import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 2208. Minimum Operations to Halve Array Sum
 * {@link https://leetcode.com/problems/minimum-operations-to-halve-array-sum/ | Link}
 */
export function halveArray(nums: number[]): number {
  let sum = nums.reduce((a, b) => a + b) / 2
  const maxQ = new MaxPriorityQueue<number>()
  let res = 0

  for (const x of nums) maxQ.enqueue(x)

  while (sum > 0) {
    const max = maxQ.dequeue().element / 2
    sum -= max
    maxQ.enqueue(max)
    res++
  }

  return res
}
