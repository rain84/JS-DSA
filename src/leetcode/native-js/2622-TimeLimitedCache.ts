/**
 * 2622. Cache With Time Limit
 * {@link https://leetcode.com/problems/cache-with-time-limit/ | Link}
 */
export class TimeLimitedCache {
	#cache = new Map<number, [value: number, expire: number]>()

	set(key: number, value: number, duration: number): boolean {
		const isExist = this.#cache.has(key)

		if (!this.#isExpired(key)) {
			this.#cache.set(key, [value, Date.now() + duration])
		}

		return isExist
	}

	get(key: number): number {
		if (this.#isExpired(key)) return -1
		const res = this.#cache.get(key)?.[0] ?? -1
		return res
	}

	count(): number {
		const xs = Array.from(this.#cache).filter(([key]) => !this.#isExpired(key))
		return xs.length
	}

	#isExpired = (key: number) =>
		this.#cache.has(key) && (this.#cache.get(key)?.[1] ?? Number.NEGATIVE_INFINITY) < Date.now()
}
