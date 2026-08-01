// Promise polyfills solution

// biome-ignore lint:
export function Promise(fn) {
	this.thenHandlers = []
	this.catchHandlers = []
	this.isResolved = false
	this.isRejected = false

	setTimeout(() => fn(this.applyResolve.bind(this), this.applyReject.bind(this)))
}

Promise.prototype = {
	applyResolve: function () {
		for (const handler of this.thenHandlers) handler()
		this.isResolved = true
	},

	applyReject: function () {
		for (const handler of this.catchHandlers) handler()
		this.isRejected = true
	},

	// biome-ignore lint:
	then: function (handler) {
		if (this.isResolved) {
			handler()
		} else {
			this.thenHandlers.push(handler)
		}

		return this
	},

	catch: function (handler) {
		if (this.isRejected) {
			handler()
		} else {
			this.catchHandlers.push(handler)
		}

		return this
	},
}

const p = new Promise((resolve, reject) =>
	Math.round(Math.random() * 10) % 2 === 0 ? resolve() : reject(),
)

p.then(() => console.log('resolved')).catch(() => console.log('rejected'))

/// *************************************************************************************

function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		const results = []
		let resolvedCount = 0

		promises.forEach((promise, index) => {
			promise
				.then((result) => {
					results[index] = result

					resolvedCount++

					if (resolvedCount === promises.length) {
						resolve(results)
					}
				})
				.catch((err) => reject(err))
		})
	})
}

promiseAll([
	new Promise((resolve) => {
		setTimeout(() => resolve('foo'), 5000)
	}),

	new Promise((resolve, reject) => {
		setTimeout(() => resolve('bar'), 1000)
	}),

	new Promise((resolve, reject) => {
		setTimeout(() => {
			Math.round(Math.random() * 10) % 2 === 0 ? resolve('baz') : reject(new Error())
		}, 300)
	}),
])
	.then((res) => console.log('RESOLVED: ', res))
	.catch((err) => console.log('REJECTED: ', err))
