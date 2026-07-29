import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/take-gifts-from-the-richest-pile | 2558. Take Gifts From the Richest Pile}
 *
 * Topics: Array | Heap (Priority Queue) | Simulation
 */
export function pickGifts(gifts: number[], k: number): number {
  const pq = new MaxPriorityQueue<number>({ priority: (x) => x })

  for (const x of gifts) pq.enqueue(x)

  while (k--) {
    const x = Math.floor(Math.sqrt(pq.dequeue().element))
    pq.enqueue(x)
  }

  const res = pq.toArray().reduce((a, b) => a + b.element, 0)

  return res
}
