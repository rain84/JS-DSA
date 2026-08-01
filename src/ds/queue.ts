class Node<T> {
	constructor(
		public val: T,
		public next: Node<T> | null = null,
	) {}
}

export interface IQueue<T> {
	get size(): number
	get isEmpty(): boolean
	get front(): T | undefined

	enqueue(val: T): this
	dequeue(): T | undefined
	at(i: number): T | undefined

	[Symbol.iterator](): IterableIterator<T>
}

export class Queue<T> implements IQueue<T> {
	#size = 0
	#head: Node<T> | null = null
	#tail: Node<T> | null = null

	constructor(values: Iterable<T> = []) {
		for (const x of values) {
			this.enqueue(x)
		}
	}

	get size() {
		return this.#size
	}

	get isEmpty() {
		return this.#size === 0
	}

	get front() {
		return this.#head?.val
	}

	at(i: number): T | undefined {
		if (this.size === 0) return
		if (i < 0) i = this.#size + i
		if (i < 0 || this.#size <= i) return

		let node = this.#head
		while (i--) node = node?.next!

		return node?.val
	}

	enqueue(val: T) {
		const node = new Node(val)

		if (this.isEmpty) {
			this.#head = this.#tail = node
		} else {
			this.#tail!.next = node
			this.#tail = node
		}

		this.#size++

		return this
	}

	dequeue() {
		if (this.#head === null) return

		const { val } = this.#head
		this.#head = this.#head.next
		this.#size--

		return val
	}

	*[Symbol.iterator]() {
		let node = this.#head

		while (node) {
			yield node.val
			node = node.next
		}
	}

	toString() {
		return String(this)
	}

	[Symbol.toPrimitive]() {
		return [...this].join('')
	}
}
