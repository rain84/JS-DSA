const promiseName = Symbol()

interface Object<T> {
	[prop: string]: T
}

interface PResult<T> {
	name: string
	val: T
}

interface P<T> extends Promise<PResult<T>> {
	[promiseName]?: string
}

interface Promises<T> extends Object<Promise<T>> {}

type U = unknown
type ToArray<T> = (promises: Promises<T>) => P<U>[]
type WPA<T> = (promises: Promises<T>) => InstanceType<typeof Proxy> & Promises<T>
// biome-ignore lint:
type Get<T> = (target: T, prop: string, receiver: any) => Promise<U | null>

const toArray: ToArray<U> = (promises) => {
	return Object.entries(promises).map(([name, p]) => {
		const res: P<U> = p.then((val) => ({ name, val }))
		res[promiseName] = name

		return res
	})
}

export const asyncParallel: WPA<U> = (target) => {
	let promises = toArray(target)

	const cache: Object<U> = {}

	const get: Get<typeof target> = async (target, prop, receiver) => {
		if (!(prop in target)) return null
		if (prop in cache) return cache[prop]

		const raceResult = await Promise.race(promises)

		cache[raceResult.name] = raceResult.val
		promises = promises.filter(({ [promiseName]: name }) => {
			return name !== raceResult.name
		})

		return get(target, prop, receiver)
	}

	const handler: ProxyHandler<typeof target> = {
		get,
	}

	return new Proxy<typeof target>(target, handler)
}
