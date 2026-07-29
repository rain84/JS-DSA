import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii | 3066. Minimum Operations to Exceed Threshold Value II}
 *
 * Topics: Array | Heap (Priority Queue) | Simulation
 */
export function minOperations(nums: number[], k: number): number {
  const pq = new MinPriorityQueue<number>()
  let res = 0

  for (const x of nums) {
    pq.enqueue(x)
  }

  for (; pq.size() >= 2 && pq.front().element < k; res++) {
    const x = pq.dequeue()?.element ?? 0
    const y = pq.dequeue()?.element ?? 0
    pq.enqueue(Math.min(x, y) * 2 + Math.max(x, y))
  }

  return res
}
