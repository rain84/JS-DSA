const fakedFetch = (timeout) =>
	new Promise((resolve) => setTimeout(() => resolve(timeout), timeout * 1000))

const obj = {
	name: 'storage',

	[Symbol.toPrimitive]: function () {
		console.log('in Symbol.toPrimitive')
		return this.name
	},

	*[Symbol.iterator]() {
		// yield await fakedFetch(1)
		yield 'hello'
		yield 'wirldd'
		yield 'iteration!'
	},

	async *[Symbol.asyncIterator]() {
		// yield await fakedFetch(1)
		yield 'hello'
		yield 'async'
		yield 'iteration!'
	},
}
;(async () => {
	// for await (const iterator of obj) {
	//     console.log(iterator)
	// }

	const handler = {
		get: async (target, name, receiver) => {
			// console.log(name, typeof name)
			return target[name]
		},

		set: (target, prop, val) => {
			console.log('set', prop, val)
			target[prop] = val
			return val
		},

		enumerate: (oTarget) => oTarget.keys(),
	}

	const target = obj
	const p = new Proxy(target, handler)
	const data = { ...(await p) }
	console.log(data)
})()
