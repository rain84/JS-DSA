export class LRUCache<T> {
	#query: string[] = []
	#cache = new Map<string, T>()

	constructor(public size: number) {}

	set(key: string, val: T) {
		if (this.#cache.has(key)) return

		if (this.#cache.size === this.size) {
			this.delete(this.#query[0])
		}

		this.#cache.set(key, val)
		this.#query.push(key)
	}

	get(key: string) {
		return this.#cache.get(key)
	}

	delete(key: string) {
		this.#query = this.#query.filter((item) => item !== key)
		this.#cache.delete(key)
	}

	*[Symbol.iterator]() {
		for (const value of this.#cache.values()) yield value
	}
}

const cache = new LRUCache(4)
console.log('cache', cache)
for (const ch of 'qwerty') {
	cache.set(ch, ch)
}
console.log([...cache])
