import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * 703. Kth Largest Element in a Stream
 * {@link https://leetcode.com/problems/kth-largest-element-in-a-stream/ | Link}
 *
 * Topics: Tree | Design | Binary Search Tree | Heap (Priority Queue) | Binary Tree | Data Stream
 */
export class KthLargest {
  #pq = new MinPriorityQueue<number>()
  #k = 1

  constructor(k: number, nums: number[]) {
    this.#k = k
    for (const x of nums) this.add(x)
  }

  add(val: number): number {
    this.#pq.enqueue(val)
    if (this.#pq.size() > this.#k) this.#pq.dequeue()
    return this.#pq.front().element
  }
}
