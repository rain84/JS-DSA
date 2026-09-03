import { resolve } from '../promise'
import { asyncParallel } from './asyncParallel'

const fakedFetch = (timeout: number) => resolve(timeout, timeout * 100)

let heavyFetches: ReturnType<typeof asyncParallel>

beforeEach(() => {
	heavyFetches = asyncParallel({
		someHeavyData: fakedFetch(5),
		settings: fakedFetch(3),
		config: fakedFetch(1),
	})
})

it('proxy should return data asynchronously', async () => {
	expect(heavyFetches).toBeDefined()

	expect(await heavyFetches.settings).toBe(3)
	expect(await heavyFetches.someHeavyData).toBe(5)
	expect(await heavyFetches.config).toBe(1)
})
