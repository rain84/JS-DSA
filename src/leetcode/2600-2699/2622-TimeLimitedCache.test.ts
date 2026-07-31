import { TimeLimitedCache } from './2622-TimeLimitedCache'

describe('TimeLimitedCache', () => {
	let now = 0

	beforeEach(() => {
		now = 0
		vi.spyOn(Date, 'now').mockImplementation(() => now)
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	const advance = (ms: number) => {
		now += ms
	}

	it('set() returns false for a new key', () => {
		const cache = new TimeLimitedCache()

		expect(cache.set(1, 42, 1000)).toBe(false)
	})

	it('set() returns true when the key exists and is not expired', () => {
		const cache = new TimeLimitedCache()

		cache.set(1, 42, 1000)

		expect(cache.set(1, 42, 1000)).toBe(true)
	})

	it('set() returns false when the previous value has expired', () => {
		const cache = new TimeLimitedCache()

		cache.set(1, 42, 1000)
		advance(1001)

		expect(cache.set(1, 43, 1000)).toBe(false)
		expect(cache.get(1)).toBe(43)
	})

	it('set() overwrites the value of an existing key', () => {
		const cache = new TimeLimitedCache()

		cache.set(1, 42, 1000)
		cache.set(1, 43, 1000)

		expect(cache.get(1)).toBe(43)
	})

	it('get() returns the stored value before expiry', () => {
		const cache = new TimeLimitedCache()
		cache.set(1, 42, 1000)

		advance(500)

		expect(cache.get(1)).toBe(42)
	})

	it('get() returns the value exactly at the expiry moment', () => {
		const cache = new TimeLimitedCache()
		cache.set(1, 42, 1000)

		advance(1000)

		expect(cache.get(1)).toBe(42)
	})

	it('get() returns -1 after the value has expired', () => {
		const cache = new TimeLimitedCache()
		cache.set(1, 42, 1000)

		advance(1001)

		expect(cache.get(1)).toBe(-1)
	})

	it('get() returns -1 for a missing key', () => {
		const cache = new TimeLimitedCache()

		expect(cache.get(1)).toBe(-1)
	})

	it('count() returns the number of unexpired entries', () => {
		const cache = new TimeLimitedCache()
		cache.set(1, 42, 1000)
		cache.set(2, 43, 5000)

		expect(cache.count()).toBe(2)

		advance(3000)

		expect(cache.count()).toBe(1)
		expect(cache.get(1)).toBe(-1)
		expect(cache.get(2)).toBe(43)
	})

	it('count() drops expired entries', () => {
		const cache = new TimeLimitedCache()
		cache.set(1, 42, 100)
		cache.set(2, 43, 10_000)

		advance(101)

		expect(cache.count()).toBe(1)

		// the expired entry is gone for good
		expect(cache.get(1)).toBe(-1)
	})

	it('count() is 0 for an empty cache', () => {
		const cache = new TimeLimitedCache()

		expect(cache.count()).toBe(0)
	})

	it('count() is 0 after all entries expire', () => {
		const cache = new TimeLimitedCache()
		cache.set(1, 42, 100)

		advance(101)

		expect(cache.count()).toBe(0)
	})

	it('works with several keys that expire at different moments', () => {
		const cache = new TimeLimitedCache()

		cache.set(1, 10, 300)
		cache.set(2, 20, 600)
		cache.set(3, 30, 900)

		advance(400)
		expect(cache.get(1)).toBe(-1)
		expect(cache.get(2)).toBe(20)
		expect(cache.get(3)).toBe(30)
		expect(cache.count()).toBe(2)

		advance(300)
		expect(cache.get(2)).toBe(-1)
		expect(cache.get(3)).toBe(30)
		expect(cache.count()).toBe(1)

		advance(300)
		expect(cache.get(3)).toBe(-1)
		expect(cache.count()).toBe(0)
	})
})
