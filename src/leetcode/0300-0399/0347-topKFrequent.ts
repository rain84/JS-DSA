import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 347. Top K Frequent Elements
 * {@link https://leetcode.com/problems/top-k-frequent-elements/ | Link}
 */
export function topKFrequent(nums: number[], k: number): number[] {
  const res = Array<number>(k)
  const cnt = new Map<number, number>()
  const minPQ = new MinPriorityQueue<number>()

  for (const x of nums) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1)
  }

  for (const [x, c] of cnt) {
    minPQ.enqueue(x, c)
    if (minPQ.size() > k) minPQ.dequeue()
  }

  while (k--) {
    res[k] = minPQ.dequeue().element
  }

  return res
}

export function topKFrequent2(nums: number[], k: number): number[] {
  const cnt = new Map()
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) || 0) + 1)
  }

  return [...cnt]
    .sort((a, b) => b[1] - a[1])
    .splice(0, k)
    .map(([x]) => x)
}
