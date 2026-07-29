import { Queue } from 'ds/queue'

/**
 * 933. Number of Recent Calls
 * {@link https://leetcode.com/problems/number-of-recent-calls/ | Link}
 *
 */
export class RecentCounter {
  #RANGE = 3000
  #queue = new Queue<number>()

  ping(t: number): number {
    this.#queue.enqueue(t)
    const lowest = t - this.#RANGE

    while (this.#queue.front! < lowest) {
      this.#queue.dequeue()
    }

    return this.#queue.size
  }
}

export class RecentCounter_with_array_based_queue {
  #RANGE = 3000
  #queue: number[] = []

  ping(t: number): number {
    this.#queue.push(t)
    const range = t - this.#RANGE

    while (this.#queue[0] < range) {
      this.#queue.shift()
    }

    return this.#queue.length
  }
}
