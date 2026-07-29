import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/maximum-distance-in-arrays/ | 624. Maximum Distance in Arrays}
 *
 * Topics: Array | Greedy
 */

/*
 * Performance (by 'utils/perf.ts'), args = [[[1,2,3],[4,5],[1,2,3]],]
 *
 * ──────────────────────────────────────────────────────────────────
 *  (index)  Function      ops/sec  Time (ms)  Iterations  Speed (%)
 * ──────────────────────────────────────────────────────────────────
 *  1        maxDistance2  1425285   701       1000000     100.00
 *  2        maxDistance   1041311   960       1000000     73.06
 *  2        maxDistance3  251038   3983       1000000     17.61
 * ──────────────────────────────────────────────────────────────────
 */

export function maxDistance(arrays: number[][]): number {
  const n = arrays.length
  let res = 0
  let [min, max] = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]

  for (let i = 0; i < n; i++) {
    const a = arrays[i]
    res = Math.max(Math.max(a.at(-1)! - min, max - a[0]), res)
    min = Math.min(min, a[0])
    max = Math.max(max, a.at(-1)!)
  }

  return res
}

/** One-Liner */
export const maxDistance2 = (arrays: number[][]): number =>
  arrays.reduce(
    ([res, min, max], a) => [
      Math.max(Math.max(a.at(-1)! - min, max - a[0]), res),
      Math.min(min, a[0]),
      Math.max(max, a.at(-1)!),
    ],
    [0, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
  )[0]

/**  Solved with PriorityQueue */
export function maxDistance3(arrays: number[][]): number {
  const minPQ = new MinPriorityQueue<[number, number]>({ priority: ([x]) => x })
  const maxPQ = new MaxPriorityQueue<[number, number]>({ priority: ([x]) => x })

  for (let i = 0; i < arrays.length; i++) {
    minPQ.enqueue([arrays[i][0], i])
    maxPQ.enqueue([arrays[i].at(-1)!, i])
  }

  let res = Number.NEGATIVE_INFINITY
  const maxes = maxPQ.toArray()

  while (!minPQ.isEmpty()) {
    const [min, a1] = minPQ.dequeue().element

    for (const {
      element: [max, a2],
    } of maxes) {
      if (a1 === a2) continue
      res = Math.max(res, max - min)
      break
    }
  }

  return res
}
