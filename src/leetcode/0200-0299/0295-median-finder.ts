import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue'
/**
 * 295. Find Median from Data Stream
 * {@link https://leetcode.com/problems/find-median-from-data-stream/ | Link}
 */
export class MedianFinder {
  #minQ = new MinPriorityQueue<number>()
  #maxQ = new MaxPriorityQueue<number>()

  addNum(num: number): void {
    const [minQ, maxQ] = [this.#minQ, this.#maxQ]
    maxQ.enqueue(num)
    minQ.enqueue(maxQ.dequeue().element)
    if (minQ.size() > maxQ.size()) {
      maxQ.enqueue(minQ.dequeue().element)
    }
  }

  findMedian(): number {
    const [minQ, maxQ] = [this.#minQ, this.#maxQ]
    const median =
      maxQ.size() === minQ.size()
        ? (maxQ.front().element + minQ.front().element) / 2
        : maxQ.front().element

    return median
  }
}

export class MedianFinder2 {
  #nums: number[] = []

  addNum(num: number): void {
    const nums = this.#nums
    let [l, r] = [0, nums.length]

    while (l < r) {
      const mid = (l + r) >> 1

      if (nums[mid] < num) l = mid + 1
      else r = mid
    }

    nums.splice(l, 0, num)
  }

  findMedian(): number {
    const middle = this.#nums.length >> 1
    if (this.#nums.length & 1) {
      return this.#nums[middle]
    }
    return (this.#nums[middle] + this.#nums[middle - 1]) / 2
  }
}
