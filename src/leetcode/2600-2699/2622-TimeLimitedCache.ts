type CacheItem = {
	value: number
	expiredAt: number
}

export class TimeLimitedCache {
	#cache: Map<number, CacheItem> = new Map()

	set(key: number, value: number, duration: number): boolean {
		const isExists = this.#isExists(key)
		const expiredAt = Date.now() + duration
		this.#cache.set(key, { value, expiredAt })

		return isExists
	}

	#isExists(key: number) {
		const item = this.#cache.get(key)
		return (item?.expiredAt ?? -1) >= Date.now()
	}

	get(key: number): number {
		return this.#isExists(key) ? this.#cache.get(key)!.value : -1
	}

	count(): number {
		const now = Date.now()

		this.#cache.forEach((item, key) => {
			if (item.expiredAt < now) {
				this.#cache.delete(key)
			}
		})

		return this.#cache.size
	}
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
