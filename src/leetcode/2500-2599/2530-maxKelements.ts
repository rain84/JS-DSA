import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/maximal-score-after-applying-k-operations | 2530. Maximal Score After Applying K Operations}
 *
 * Topics: Array | Greedy | Heap (Priority Queue)
 */
export function maxKelements(nums: number[], k: number): number {
  const heap = MaxPriorityQueue.from(nums.map((x) => [x, x]))
  let res = 0

  while (k--) {
    const x = heap.dequeue().element
    res += x
    heap.enqueue(Math.ceil(x / 3))
  }

  return res
}

/** One-Liner */
export const maxKelements2 = (
  nums: number[],
  k: number,
  res = 0,
  heap = MaxPriorityQueue.from(nums.map((x) => [x, x]))
): number => (
  Array.from<number>(
    { length: k },
    (x) => ((x = heap.dequeue().element), (res += x), heap.enqueue(Math.ceil(x / 3)))
  ),
  res
)
