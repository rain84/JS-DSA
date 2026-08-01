export class MinHeap<T = number> {
	#h: T[] = []

	constructor(arr?: T[]) {
		if (arr) for (const x of arr) this.push(x)
	}

	get size(): number {
		return this.#h.length
	}

	push(x: T) {
		const h = this.#h

		h.push(x)
		if (h.length === 1) return

		let i = h.length - 1
		while (i !== undefined) {
			const p = i >> 1
			if (h[p] <= h[i]) return
			this.#swap(i, p)
			i = p
		}
	}

	pop(): T | undefined {
		const h = this.#h

		if (h.length < 2) return h.shift()

		const i = this.#adjustIndex(0)
		this.#swap(i, this.#h.length - 1)
		const val = this.#h.pop()

		this.#sinkingDown(i)

		return val
	}

	remove(v: T) {
		let i = this.#h.indexOf(v)
		if (i === -1) return

		i = this.#adjustIndex(i)
		this.#swap(i, this.#h.length - 1)
		this.#h.pop()

		this.#sinkingDown(i)
	}

	peek(): T | undefined {
		return this.#h[0]
	}

	#sinkingDown(i = 0) {
		const h = this.#h

		while (true) {
			const l = 2 * i + 1
			const r = 2 * i + 2

			if (!h[l] && !h[r]) break
			const c = h[l] && h[r] ? (h[l] <= h[r] ? l : r) : h[l] ? l : r

			if (h[c] < h[i]) this.#swap(i, c)
			i = c
		}
	}

	/** Get index of the last duplicated value, if such exist */
	#adjustIndex(i: number): number {
		while (this.#h[i] === this.#h[i + 1]) i++
		return i
	}

	#swap(i: number, j: number) {
		const h = this.#h
		;[h[i], h[j]] = [h[j], h[i]]
	}

	*[Symbol.iterator]() {
		const h = [...this.#h]
		while (this.#h.length) yield this.pop()!
		this.#h = h
	}
}

export class MaxHeap extends MinHeap {
	push(x: number): void {
		super.push(-x)
	}

	pop(): number | undefined {
		const res = super.pop()
		if (res === undefined) return
		return -res
	}

	peek(): number | undefined {
		const res = super.peek()
		if (res === undefined) return
		return -res
	}

	remove(v: number): void {
		super.remove(-v)
	}
}
