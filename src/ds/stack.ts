import { SinglyLinkedList } from './singly-linked-list'

export class Stack<T> {
	#storage = new SinglyLinkedList<T>()

	constructor(...values: T[]) {
		if (values.length) {
			this.#storage.unshift(...values)
		}
	}

	push(val: T) {
		this.#storage.unshift(val)
		return this
	}

	pop() {
		return this.#storage.shift()
	}

	peek() {
		return this.#storage.get(0)
	}

	size() {
		return this.#storage.length
	}

	isEmpty() {
		return !this.#storage.length
	}
}
