import type { Cb, ISet } from './set.types'

// Full implementation of the ES "Set" data structure
// TODO: add ability to use Set with any type of "T"
// biome-ignore lint:
export class Set<T extends number> implements ISet<T> {
	static #LOAD_FACTOR = 0.75

	readonly [Symbol.toStringTag] = 'CustomSet'

	#storage: T[][] = [[]]
	#itemsCount = 0

	constructor(xs?: T[] | null) {
		this.clear()
		if (!xs) return

		this.#storage.push([...xs])
		this.#itemsCount = xs.length

		if (this.#itemsCount > 1) {
			let size = this.#getUpperBound(this.#itemsCount)
			if (this.#shouldIncrease()) size *= 2
			this.#rehash(size)
		}
	}

	#rehash(size: number) {
		const storage = this.#storage
		this.#reset(size)

		for (const slot of storage) {
			for (const x of slot) {
				this.add(x)
			}
		}
	}

	get size() {
		return this.#itemsCount
	}

	add(x: T): this {
		if (this.has(x)) return this

		const hash = this.#getHash(x)
		this.#storage[hash].push(x)
		this.#itemsCount++

		if (this.#shouldIncrease()) {
			this.#rehash(this.#storage.length * 2)
		}

		return this
	}

	delete(x: T): boolean {
		const [slot, i] = this.#find(x) ?? []

		if (!slot || i === undefined) return false

		slot[i] = slot.at(-1)!
		slot.pop()

		return true
	}

	has(x: T): boolean {
		return this.#find(x) !== null
	}

	// biome-ignore lint:
	forEach(cb: Cb<T>, thisArg?: any): void {
		for (const slot of this.#storage) {
			for (const x of slot) {
				cb(x, x, thisArg ?? this)
			}
		}
	}

	clear(): void {
		this.#reset()
	}

	*[Symbol.iterator](): IterableIterator<T> {
		for (const slot of this.#storage) {
			for (const x of slot) {
				yield x
			}
		}
	}

	*entries(): IterableIterator<[T, T]> {
		for (const slot of this.#storage) {
			for (const x of slot) {
				yield [x, x]
			}
		}
	}

	keys(): IterableIterator<T> {
		return this.values()
	}

	*values(): IterableIterator<T> {
		yield* this[Symbol.iterator]()
	}

	#getUpperBound(x: number) {
		return 2 ** Math.ceil(Math.log2(x))
	}

	#shouldIncrease() {
		return this.#itemsCount / this.#storage.length >= Set.#LOAD_FACTOR
	}

	#find(x: number): MaybeNull<[T[], number]> {
		const slot = this.#storage[this.#getHash(x)] ?? []

		for (let i = 0; i < slot.length; i++) {
			if (slot[i] === x) {
				return [slot, i]
			}
		}

		return null
	}

	#getHash(x: number, modulus = this.#storage.length) {
		return Math.abs(x % modulus)
	}

	#reset(length = 1) {
		this.#itemsCount = 0
		this.#storage = []
		while (length--) this.#storage.push([])
	}
}
