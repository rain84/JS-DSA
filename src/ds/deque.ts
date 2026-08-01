// https://en.wikipedia.org/wiki/Double-ended_queue

export class Deque<T> implements IDeque<T> {
	#head: Node<T> | null = null
	#tail: Node<T> | null = null
	#size = 0

	constructor(xs?: Iterable<T>) {
		if (xs) for (const x of xs) this.pushBack(x)
	}

	get back(): T | undefined {
		return this.#tail?.val
	}

	get front(): T | undefined {
		return this.#head?.val
	}

	get size(): number {
		return this.#size
	}

	get isEmpty(): boolean {
		return this.#size === 0
	}

	at(i: number): T | undefined {
		if (i < -this.#size || this.#size <= i) return

		let node: Node<T> | null = null

		if (i >= 0) {
			node = this.#head
			while (i--) node = node?.next!
		} else {
			node = this.#tail
			while (++i) node = node?.prev!
		}

		return node?.val
	}

	clear(): void {
		let node = this.#head

		while (node) {
			const next = node.next
			node.prev = node.next = null
			node = next
		}

		this.#head = this.#tail = null
		this.#size = 0
	}

	popBack(): T | undefined {
		if (this.#tail === null) return

		const { val, prev } = this.#tail

		if (prev) prev.next = null

		this.#tail.prev = null
		this.#tail = prev
		this.#size--

		return val
	}

	popFront(): T | undefined {
		if (this.#head === null) return

		const { val, next } = this.#head

		if (next) next.prev = null

		this.#head.next = null
		this.#head = next
		this.#size--

		return val
	}

	pushBack(val: T): this {
		const node = new Node(val)

		if (this.isEmpty) {
			this.#head = this.#tail = node
		} else {
			this.#tail!.next = node
			node.prev = this.#tail
			this.#tail = node
		}

		this.#size++

		return this
	}

	pushFront(val: T): this {
		const node = new Node(val)

		if (this.isEmpty) {
			this.#head = this.#tail = node
		} else {
			this.#head!.prev = node
			node.next = this.#head
			this.#head = node
		}

		this.#size++

		return this
	}

	toString() {
		return String(this)
	}

	*[Symbol.iterator]() {
		let node = this.#head

		while (node) {
			yield node.val
			node = node.next
		}
	}

	[Symbol.toPrimitive]() {
		return [...this].join('')
	}
}

interface IDeque<T> {
	get back(): T | undefined
	get size(): number
	get isEmpty(): boolean
	get front(): T | undefined

	pushBack(val: T): this
	pushFront(val: T): this
	popBack(): T | undefined
	popFront(): T | undefined
	at(i: number): T | undefined
	clear(): void
	toString(): string

	[Symbol.iterator](): IterableIterator<T>
	[Symbol.toPrimitive](): string
}

class Node<T> {
	val: T
	prev: Node<T> | null = null
	next: Node<T> | null = null

	constructor(val: T) {
		this.val = val
	}
}
