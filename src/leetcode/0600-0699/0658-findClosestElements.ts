import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 658. Find K Closest Elements
 * {@link https://leetcode.com/problems/find-k-closest-elements/ | Link}
 */
export function findClosestElements(arr: number[], k: number, x: number): number[] {
  const hash = new Map<number, number[]>()
  const res: number[] = []

  for (const val of arr) {
    const diff = Math.abs(val - x)
    if (!hash.has(diff)) hash.set(diff, [])
    hash.get(diff)?.push(val)
  }

  const maxPQ = new MaxPriorityQueue<number[]>()
  for (const [diff, nums] of hash) {
    maxPQ.enqueue(nums, diff)
    if (maxPQ.size() > k) maxPQ.dequeue()
  }

  while (!maxPQ.isEmpty()) {
    res.push(...maxPQ.dequeue().element.sort((a, b) => b - a))
  }
  res.splice(0, res.length - k)

  return res.sort((a, b) => a - b)
}
