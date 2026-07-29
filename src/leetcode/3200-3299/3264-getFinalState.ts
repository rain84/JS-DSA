import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i | 3264. Final Array State After K Multiplication Operations I}
 *
 * Topics: Array | Math | Heap (Priority Queue) | Simulation
 */
export function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  while (k--) {
    const min = Math.min(...nums)
    const i = nums.indexOf(min)
    nums[i] *= multiplier
  }

  return nums
}

export function getFinalState2(nums: number[], k: number, multiplier: number): number[] {
  const minPQ = new MinPriorityQueue<number>({
    compare: (i, j) => (nums[i] === nums[j] ? i - j : nums[i] - nums[j]),
  })

  nums.forEach((_, i) => minPQ.enqueue(i))
  while (k--) {
    const i = minPQ.dequeue() as unknown as number
    nums[i] *= multiplier
    minPQ.enqueue(i)
  }

  return nums
}
