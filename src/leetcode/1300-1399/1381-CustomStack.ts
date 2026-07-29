/**
 * {@link https://leetcode.com/problems/design-a-stack-with-increment-operation/ | 1381. Design a Stack With Increment Operation}
 *
 * Topics: Array | Stack | Design
 */

/**
 * Array using Lazy Propagation
 * Time complexity: O(1) for all operations
 * */
export class CustomStack {
  #maxSize: number
  #stk: number[]
  #inc: number[]
  #i = 0

  constructor(maxSize: number) {
    this.#maxSize = maxSize
    this.#stk = Array(maxSize).fill(0)
    this.#inc = Array(maxSize).fill(0)
  }

  push(x: number): void {
    if (this.#i < this.#maxSize) {
      this.#stk[this.#i++] = x
    }
  }

  pop(): number {
    if (this.#i === 0) return -1

    this.#i--
    const val = this.#stk[this.#i] + this.#inc[this.#i]

    if (this.#i) {
      this.#inc[this.#i - 1] += this.#inc[this.#i]
    }
    this.#inc[this.#i] = 0

    return val
  }

  increment(k: number, val: number): void {
    if (this.#i) {
      this.#inc[Math.min(k, this.#i) - 1] += val
    }
  }
}

/**
 * Time complexity: O(1) for push and pop, O(k) for increment
 */
export class CustomStack2 {
  #maxSize: number
  #stk: number[] = []

  constructor(maxSize: number) {
    this.#maxSize = maxSize
  }

  push(x: number): void {
    if (this.#stk.length < this.#maxSize) this.#stk.push(x)
  }

  pop(): number {
    if (this.#stk.length === 0) return -1
    return this.#stk.pop()!
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < Math.min(k, this.#stk.length); i++) {
      this.#stk[i] += val
    }
  }
}
