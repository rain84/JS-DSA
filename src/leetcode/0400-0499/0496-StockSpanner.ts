/**
 * 496. Next Greater Element I
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/706/stacks-and-queues/4612/ | Link}
 *
 */
export class StockSpanner {
  #stack: Stock[] = []
  #index = 0

  next(price: number): number {
    this.#index++
    let prev = this.#stack.at(-1)

    while ((prev?.price ?? Number.POSITIVE_INFINITY) <= price) {
      this.#stack.pop()
      prev = this.#stack.at(-1)
    }

    const res = this.#index - (prev?.index ?? 0)
    this.#stack.push({ index: this.#index, price })

    return res
  }
}

type Stock = {
  index: number
  price: number
}
