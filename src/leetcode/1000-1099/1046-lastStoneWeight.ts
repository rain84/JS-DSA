import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 1046. Last Stone Weight
 * {@link https://leetcode.com/problems/last-stone-weight/ | Link}
 */
export function lastStoneWeight(stones: number[]): number {
  const h = new MaxPriorityQueue<number>()
  for (const x of stones) h.enqueue(x)

  while (h.size) {
    const [a, b] = [h.dequeue()?.element ?? null, h.dequeue()?.element ?? null]

    if (a === null) return 0
    if (b === null) return a
    const c = a - b
    if (c) h.enqueue(c)
  }

  return 0
}
