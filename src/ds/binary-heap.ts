type TComparator = (parent: number, child: number) => boolean
// biome-ignore lint:
export type Selector = (value: any) => number
type Element<T> = {
	index: number
	key: number
	value: T
}

export interface IBinaryHeap<T> extends BinaryHeap<T> {}

export class BinaryHeap<T = number> {
	static createMin = <T = number>(selector?: Selector) =>
		new BinaryHeap<T>(BinaryHeap.#comparators.min, selector)

	static createMax = <T = number>(selector?: Selector) =>
		new BinaryHeap<T>(BinaryHeap.#comparators.max, selector)

	static #comparators = {
		max: (parent: number, child = Number.NEGATIVE_INFINITY) => child <= parent,
		min: (parent: number, child = Number.POSITIVE_INFINITY) => child >= parent,
	}

	#h: T[] = []
	#comparator: TComparator
	#selector: Selector

	private constructor(comparator: TComparator, selector: Selector = (key: number) => key) {
		this.#comparator = comparator
		this.#selector = selector
	}

	get size() {
		return this.#h.length
	}

	push(val: T) {
		this.#h.push(val)
		let index = this.#h.length - 1

		while (index) {
			const child = this.#getElement(index)!
			const parent = this.#getParent(child.index)!
			const inOrder = this.#comparator(parent.key, child.key)

			if (inOrder) return

			this.#swapValues(parent.index, child.index)
			index = parent.index
		}
	}

	pop() {
		if (this.size <= 2) return this.#h.shift()

		this.#swapValues(0, this.size - 1)
		const val = this.#h.pop()

		//  sinking down
		let index = 0

		while (true) {
			const parent = this.#getElement(index)!

			const [l, r] = this.#getChildren(parent.index)
			const child = l && r ? (this.#comparator(l.key, r.key) ? l : r) : (l ?? r)
			const inOrder = !child || this.#comparator(parent.key, child.key)
			if (inOrder) break

			this.#swapValues(parent.index, child.index)
			index = child.index
		}

		return val
	}

	peek() {
		return this.#h[0]
	}

	fill(values?: T[]) {
		if (values === undefined) return this
		for (const v of values) this.push(v)
		return this
	}

	*[Symbol.iterator]() {
		const values: T[] = [...this.#h]
		while (this.size) yield this.pop()!
		this.#h = values
	}

	#inBounds(index: number) {
		return 0 <= index && index < this.#h.length
	}

	#getElement(index: number): MaybeUndefined<Element<T>> {
		if (!this.#inBounds(index)) return

		const value = this.#h[index]
		const key = this.#selector(value)

		return { index, key, value }
	}

	#getParent(index: number) {
		index = index >> 1
		return this.#getElement(index)
	}

	#getChildren(index: number) {
		const l = 2 * index + 1
		const r = 2 * index + 2

		return [this.#getElement(l), this.#getElement(r)].filter(Boolean)
	}

	#swapValues(i: number, j: number) {
		const a = this.#h
		;[a[i], a[j]] = [a[j], a[i]]
	}
}
