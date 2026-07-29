import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 1962. Remove Stones to Minimize the Total
 * {@link https://leetcode.com/problems/remove-stones-to-minimize-the-total/ | Link}
 */
export function minStoneSum(piles: number[], k: number): number {
  const maxQ = new MaxPriorityQueue<number>()

  for (const x of piles) maxQ.enqueue(x)

  while (k--) {
    maxQ.enqueue((maxQ.dequeue().element + 1) >> 1)
  }

  return maxQ.toArray().reduce((a, b) => a + b.element, 0)
}
