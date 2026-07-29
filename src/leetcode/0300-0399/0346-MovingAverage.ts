/**
 * 346. Moving Average from Data Stream
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/706/stacks-and-queues/4703/ | Link}
 *
 */
export class MovingAverage {
  #queue: number[] = []
  #sum = 0

  constructor(private size: number) {}

  next(val: number): number {
    if (this.#queue.length === this.size) this.#sum -= this.#queue.shift()!

    this.#queue.push(val)
    this.#sum += val
    const average = this.#sum / this.#queue.length

    return +average.toFixed(5)
  }
}
