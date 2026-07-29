/**
 * 155. Min Stack
 * {@link https://leetcode.com/problems/min-stack/ | Link}
 *
 */
export class MinStack {
  #stack: number[] = []
  #minStack: number[] = [Number.POSITIVE_INFINITY]

  push(val: number): void {
    this.#stack.push(val)
    this.#minStack.push(Math.min(val, this.#minStack.at(-1)!))
  }

  pop(): void {
    this.#stack.pop()
    this.#minStack.pop()
  }

  top(): number | undefined {
    return this.#stack.at(-1)
  }

  getMin(): number | undefined {
    return this.#minStack.at(-1)
  }
}
