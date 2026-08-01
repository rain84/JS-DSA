import { delay } from 'utils/time'
import { TimeLimitedCache } from './2622-TimeLimitedCache'

it('TimeLimitedCache should work', async () => {
	const cache = new TimeLimitedCache()
	expect(cache.set(1, 42, 100)).toBe(false)

	/** @todo here is a strange bug,
	 * because during debugging cache.get(1) returns 42 🤷🏻 */
	await delay(50)
	expect(cache.get(1)).toBe(42)

	await delay(25)
	expect(cache.count()).toBe(1)

	await delay(25)
	expect(cache.count()).toBe(0)

	await delay(150)
	expect(cache.get(1)).toBe(-1)
})
