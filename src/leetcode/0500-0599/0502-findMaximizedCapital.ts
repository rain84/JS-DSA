import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 502. IPO
 * {@link https://leetcode.com/problems/ipo/ | Link}
 */
export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const n = profits.length
  const projects: [number, number][] = Array(n)

  for (let i = 0; i < n; i++) {
    projects[i] = [profits[i], capital[i]]
  }

  const minCapital = new MinPriorityQueue<[number, number]>({ priority: ([_, c]) => c })
  const maxProfit = new MaxPriorityQueue<[number, number]>({ priority: ([p]) => p })

  for (const p of projects) {
    minCapital.enqueue(p)
  }

  while (k--) {
    while (minCapital.size() && minCapital.front().element[1] <= w) {
      maxProfit.enqueue(minCapital.dequeue().element)
    }
    if (maxProfit.size()) w += maxProfit.dequeue().element[0]
  }

  return w
}
