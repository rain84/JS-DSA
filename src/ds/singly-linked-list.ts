class Node<T> {
	val: T
	next: null | Node<T> = null

	constructor(val: T) {
		this.val = val
	}
}

export class SinglyLinkedList<T = unknown> {
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

			if (this.#head === null) this.#head = this.#tail = node
			else if (this.#tail) {
				this.#tail.next = node
				this.#tail = node
			}

			this.#length++
		}

		return this
	}

	pop(): T | undefined {
		if (this.#head === null) return

		const val = this.#tail?.val
		this.#length--

		if (this.#length === 0) {
			this.#head = this.#tail = null
			return val
		}

		let prev = this.#head
		while (prev.next !== this.#tail)
			if (prev.next) {
				prev = prev.next
			}
		this.#tail = prev
		this.#tail.next = null

		return val
	}

	shift(): T | undefined {
		if (this.#length === 0) return

		const val = this.#head?.val
		this.#length--

		this.#head = this.#head?.next ?? null
		if (!this.#length) {
			this.#tail = null
		}

		return val
	}

	unshift(...vals: T[]) {
		for (const val of vals) {
			const node = new Node(val)
			node.next = this.#head
			this.#head = node
			this.#length++

			if (!this.#tail) this.#tail = node
		}

		return this
	}

	get(index: number): T | undefined {
		const node = this.#getNode(index)
		if (!node) return

		return node?.val
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
		node.next = prev.next
		prev.next = node
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
		prev.next = (<Node<T>>prev.next).next

		return val
	}

	reverse() {
		if (this.#length < 2) return this
		if (!this.#head || !this.#tail) return this

		let tail: Node<T> | null = this.#head
		let head: Node<T> | null = this.#head.next

		this.#tail = this.#head
		tail.next = null

		while (head) {
			const next = head.next
			head.next = tail
			tail = head
			head = next
		}

		this.#head = tail

		return this
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

		for (const val of this) arr.push(val)

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

		let node = this.#head

		while (index--) {
			node = node?.next ?? null
		}

		return node as Node<T>
	}

	#withinBounds(index: number) {
		return 0 <= index && index < this.#length && this.#length
	}
}
