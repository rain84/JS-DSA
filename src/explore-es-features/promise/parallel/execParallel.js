class ExecParallel {
	cache = {}
	promises = []

	static #promiseName = Symbol()

	static toArray = (promises = {}) => {
		return Object.entries(promises).map(([name, p]) => {
			const res = p.then((val) => ({
				name,
				val,
			}))
			res[ExecParallel.#promiseName] = name

			return res
		})
	}

	constructor(promises = {}) {
		this.promises = ExecParallel.toArray(promises)
	}

	get #isResolvedAll() {
		return this.promises.length === 0
	}

	async waitFor(name) {
		if (name in this.cache) return this.cache[name]

		const raceResult = await Promise.race(this.promises)

		this.cache[raceResult.name] = raceResult.val
		this.promises = this.promises.filter(({ [ExecParallel.#promiseName]: name }) => {
			return name !== raceResult.name
		})

		return this.waitFor(name)
	}

	async getAll() {
		if (this.#isResolvedAll) return this.cache

		let rest = await Promise.all(this.promises)
		rest = rest.reduce((acc, { name, val }) => {
			acc[name] = val
			return acc
		}, {})

		Object.assign(this.cache, rest)

		return this.cache
	}
}

const promiseName = Symbol()

const toArray = (promises = {}) => {
	return Object.entries(promises).map(([name, p]) => {
		const res = p.then((val) => ({ name, val }))
		res[promiseName] = name

		return res
	})
}

const withParallelAsync = (target) => {
	let promises = toArray(target)

	const cache = {}
	const handler = {
		get: async (target, prop) => {
			if (!(prop in target)) return null
			if (prop in cache) return cache[prop]

			const raceResult = await Promise.race(promises)

			cache[raceResult.name] = raceResult.val
			promises = promises.filter(({ [promiseName]: name }) => {
				return name !== raceResult.name
			})

			return handler.get(target, prop)
		},
	}

	return new Proxy(target, handler)
}

const run = async () => {
	const fakedFetch = (timeout) =>
		new Promise((resolve) => setTimeout(() => resolve(timeout), timeout * 1000))

	let heavyFetches = {
		someHeavyData: fakedFetch(5),
		settings: fakedFetch(3),
		config: fakedFetch(1),
	}

	console.log('start withParallelAwait')

	heavyFetches = withParallelAsync(heavyFetches)

	console.log('\n"settings" should be available after 3 sec')
	console.log(`settings - ${await heavyFetches.settings}\n`)

	console.log('"config" should be available immediately')
	console.log(`config - ${await heavyFetches.config}\n`)

	console.log('"settings" should be available right now')
	console.log(`settings - ${await heavyFetches.settings}\n`)

	console.log('end withParallelAwait')
}

run()
