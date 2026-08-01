export class LRUCache {
	#capacity = 0
	#cache = new Map<number, number>()

	constructor(capacity: number) {
		if (capacity < 1) throw new Error('Capacity should be greater then 1')
		this.#capacity = capacity
	}

	get(key: number): number {
		const cache = this.#cache

		if (!cache.has(key)) return -1

		const val = cache.get(key)!
		cache.delete(key)
		cache.set(key, val)

		return val
	}

	set(key: number, val: number): void {
		const cache = this.#cache

		if (cache.has(key)) cache.delete(key)
		cache.set(key, val)

		if (cache.size > this.#capacity) {
			const key = cache.keys().next().value
			cache.delete(key)
		}
	}
}
