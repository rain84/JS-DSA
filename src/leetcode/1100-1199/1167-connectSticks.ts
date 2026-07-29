import { MinPriorityQueue } from '@datastructures-js/priority-queue'
/**
 * 1167. Minimum Cost to Connect Sticks
 * {@link https://leetcode.com/problems/minimum-cost-to-connect-sticks/ | Link}
 */
export function connectSticks(sticks: number[]): number {
  const pq = new MinPriorityQueue<number>()
  for (const x of sticks) pq.enqueue(x)
  let res = 0

  while (pq.size() > 1) {
    const [a, b] = [pq.dequeue()?.element ?? 0, pq.dequeue()?.element ?? 0]
    res += a + b
    pq.enqueue(a + b)
  }

  return res
}
