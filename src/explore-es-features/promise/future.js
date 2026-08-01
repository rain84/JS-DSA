class Future {
	#handlers = []

	constructor(exec) {
		setTimeout(() =>
			exec((x) => {
				return this.#handlers.reduce((res, cb) => cb?.(res) ?? res, x)
			}),
		)
	}

	// biome-ignore lint:
	then(cb) {
		this.#handlers.push(cb)
		return this
	}
}

const { log } = console

//  prettier-ignore
new Future((res) => {
	console.log('ctor')
	res(42)
})
	.then((x) => {
		log('then', x)
		return x + 1
	})
	.then((x) => {
		log('then - 2', x)
	})
