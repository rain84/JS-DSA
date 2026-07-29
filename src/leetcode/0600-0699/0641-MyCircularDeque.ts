/**
 * {@link https://leetcode.com/problems/design-circular-deque/ | 641. Design Circular Deque}
 *
 * Topics: Array | Linked List | Design | Queue
 */

/** Array-based deque */
export class MyCircularDeque {
  #k = 0
  #deque: number[] = []

  constructor(k: number) {
    this.#k = k
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false
    this.#deque.unshift(value)
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false
    this.#deque.push(value)
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false
    this.#deque.shift()
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false
    this.#deque.pop()
    return true
  }

  getFront(): number {
    return this.#deque[0] ?? -1
  }

  getRear(): number {
    return this.#deque.at(-1) ?? -1
  }

  isEmpty(): boolean {
    return this.#deque.length === 0
  }

  isFull(): boolean {
    return this.#deque.length === this.#k
  }
}

/** Doubly-linked list-based deque */
export class MyCircularDeque2 {
  #k = 0
  #size = 0
  #first: Node
  #last: Node

  constructor(k: number) {
    this.#k = k
    this.#first = this.#last = new Node(0)
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false

    if (this.#size) {
      const node = new Node(value)
      node.next = this.#first
      this.#first.prev = node
      this.#first = node
    } else {
      this.#first.val = value
    }

    this.#size++
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false

    if (this.#size) {
      const node = new Node(value)
      node.prev = this.#last
      this.#last.next = node
      this.#last = node
    } else {
      this.#last.val = value
    }

    this.#size++
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false

    this.#size--
    if (this.#size) {
      const first = this.#first.next!
      first.prev = null
      this.#first.next = null
      this.#first = first
    }

    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false

    this.#size--
    if (this.#size) {
      const last = this.#last.prev!
      last.next = null
      this.#last.prev = null
      this.#last = last
    }

    return true
  }

  getFront(): number {
    return this.isEmpty() ? -1 : this.#first.val
  }

  getRear(): number {
    return this.isEmpty() ? -1 : this.#last.val
  }

  isEmpty(): boolean {
    return this.#size === 0
  }

  isFull(): boolean {
    return this.#size === this.#k
  }
}

class Node {
  val: number
  prev: Node | null = null
  next: Node | null = null

  constructor(val: number) {
    this.val = val
  }
}
