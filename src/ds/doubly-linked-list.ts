class Node<T> {
	val: T
	next: null | Node<T> = null
	prev: null | Node<T> = null

	constructor(val: T) {
		this.val = val
	}
}

export class DoublyLinkedList<T = unknown> {
	#head: Node<T> | null = null
	#tail: Node<T> | null = null
	#length = 0

	constructor(...vals: T[]) {
		this.push(...vals)
	}

	get length() {
		return this.#length
	}

	push(...vals: T[]) {
		for (const val of vals) {
			const node = new Node<T>(val)
			const isEmpty = this.#head === null && this.#tail === null

			if (isEmpty) this.#head = this.#tail = node
			else {
				node.prev = this.#tail
				;(<Node<T>>this.#tail).next = node
				this.#tail = node
			}

			this.#length++
		}

		return this
	}

	pop(): T | undefined {
		if (this.#tail === null) return

		const val = this.#tail?.val
		this.#length--

		if (this.#length === 0) {
			this.#head = this.#tail = null
			return val
		}

		this.#tail = this.#tail.prev
		;(<Node<T>>this.#tail).next = null

		return val
	}

	shift(): T | undefined {
		if (this.#length === 0) return

		const val = this.#head?.val
		this.#length--

		this.#head = this.#head?.next ?? null

		if (this.#head) this.#head.prev = null
		if (this.#length === 0) {
			this.#tail = null
		}

		return val
	}

	unshift(...vals: T[]) {
		for (const val of vals) {
			const node = new Node(val)

			this.#length++

			if (!this.#head || !this.#tail) {
				this.#head = this.#tail = node
				return this
			}

			this.#head.prev = node
			node.next = this.#head
			this.#head = node
		}

		return this
	}

	get(index: number): T | undefined {
		return this.#getNode(index)?.val
	}

	set(index: number, val: T) {
		const node = this.#getNode(index)

		if (!node) return
		node.val = val

		return true
	}

	insert(index: number, val: T) {
		if (!(this.#withinBounds(index) || index === this.length)) return

		if (index === 0) return this.unshift(val)
		if (index === this.#length) return this.push(val)

		const node = new Node(val)
		const prev = <Node<T>>this.#getNode(index - 1)
		const next = prev.next

		node.next = next
		node.prev = prev
		prev.next = node

		if (next) next.prev = node
		this.#length++

		return this
	}

	remove(index: number) {
		if (!this.#withinBounds(index)) return

		if (index === 0) return this.shift()
		if (index === this.#length - 1) return this.pop()

		this.#length--
		const prev = <Node<T>>this.#getNode(index - 1)
		const val = prev?.next?.val
		const next = prev.next?.next ?? null

		prev.next = next
		if (next) next.prev = prev

		return val
	}

	forEach(cb: (val: T, i?: number) => unknown) {
		let node = this.#head
		let i = 0

		while (node) {
			cb(node.val, i++)
			node = node.next
		}

		return this
	}

	map(cb: (val: T, i?: number) => T) {
		let node = this.#head
		let i = 0

		while (node) {
			node.val = cb(node.val, i++)
			node = node.next
		}

		return this
	}

	toString() {
		const arr: T[] = []
		// biome-ignore lint:
		this.forEach((val) => arr.push(val))

		return arr.join('')
	}

	*[Symbol.iterator]() {
		let node = this.#head

		while (node) {
			yield node.val
			node = node.next
		}
	}

	#getNode(index: number): Node<T> | undefined {
		if (!this.#withinBounds(index)) return

		const moveFromHead = index < this.#length / 2
		let node: Node<T> | null

		if (moveFromHead) {
			node = this.#head
			while (index--) node = node?.next ?? null
		} else {
			index = this.#length - index
			node = this.#tail
			while (--index) node = node?.prev ?? null
		}

		return node as Node<T>
	}

	#withinBounds(index: number) {
		return 0 <= index && index < this.#length && this.#length
	}
}
