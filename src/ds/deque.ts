// https://en.wikipedia.org/wiki/Double-ended_queue

export class Deque<Value> implements DequeContract<Value> {
	#head: DequeNode<Value> | null = null
	#tail: DequeNode<Value> | null = null
	#size = 0

	constructor(xs?: Iterable<Value>) {
		if (xs) for (const x of xs) this.pushBack(x)
	}

	get back(): Value | undefined {
		return this.#tail?.val
	}

	get front(): Value | undefined {
		return this.#head?.val
	}

	get size(): number {
		return this.#size
	}

	get isEmpty(): boolean {
		return this.#size === 0
	}

	at(i: number): Value | undefined {
		if (i < -this.#size || this.#size <= i) return

		let node: DequeNode<Value> | null = null

		if (i >= 0) {
			node = this.#head
			while (i-- !== 0) node = node?.next ?? null
		} else {
			node = this.#tail
			while (++i !== 0) node = node?.prev ?? null
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

	popBack(): Value | undefined {
		if (this.#tail === null) return

		const { val, prev } = this.#tail

		if (prev) {
			prev.next = null
		} else {
			this.#head = null
		}

		this.#tail.prev = null
		this.#tail = prev
		this.#size--

		return val
	}

	popFront(): Value | undefined {
		if (this.#head === null) return

		const { val, next } = this.#head

		if (next) {
			next.prev = null
		} else {
			this.#tail = null
		}

		this.#head.next = null
		this.#head = next
		this.#size--

		return val
	}

	pushBack(val: Value): this {
		const node = new DequeNode(val)

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

	pushFront(val: Value): this {
		const node = new DequeNode(val)

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

interface DequeContract<Value> {
	get back(): Value | undefined
	get size(): number
	get isEmpty(): boolean
	get front(): Value | undefined

	pushBack(val: Value): this
	pushFront(val: Value): this
	popBack(): Value | undefined
	popFront(): Value | undefined
	at(i: number): Value | undefined
	clear(): void
	toString(): string

	[Symbol.iterator](): IterableIterator<Value>
	[Symbol.toPrimitive](): string
}

class DequeNode<Value> {
	val: Value
	prev: DequeNode<Value> | null = null
	next: DequeNode<Value> | null = null

	constructor(val: Value) {
		this.val = val
	}
}
