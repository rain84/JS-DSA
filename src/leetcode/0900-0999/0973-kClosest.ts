import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 973. K Closest Points to Origin
 * {@link https://leetcode.com/problems/k-closest-points-to-origin/ | Link}
 */
export function kClosest(points: number[][], k: number): number[][] {
  const minPQ = new MinPriorityQueue<[number, number]>()

  for (const [x, y] of points) {
    const d = x ** 2 + y ** 2
    minPQ.enqueue([x, y], d)
  }

  const res: number[][] = []
  while (k--) res.push(minPQ.dequeue().element)

  return res
}
