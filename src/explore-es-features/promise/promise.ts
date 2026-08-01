type Iterable<T> = Array<T | Promise<T>>

export class Promise_<T> {
	static all = <T>(iterable: Iterable<T>) => {
		return new Promise((resolve, reject) => {
			let result: Promise<T[] | void> = Promise.resolve([])
			let isRejected = false

			for (const item of iterable) {
				const p = Promise_.promisify(item)

				result = result
					.then((collection: T[] | void) => {
						return p.then((val) => {
							collection?.push(val)
							return collection
						})
					})
					.catch((val) => {
						if (isRejected) return
						isRejected = true
						reject(val)
					})
			}

			result.then(resolve)
		})
	}

	static race = <T>(iterable: Iterable<T>) => {
		return new Promise((resolve) => {
			let isFinished = false

			const callback = (val: T): void => {
				if (isFinished) return

				isFinished = true
				resolve(val)
			}

			for (const item of iterable) {
				Promise_.promisify(item).then(callback).catch(callback)
			}
		})
	}

	static resolve = <T>(value?: T, timeout?: number) => {
		return typeof timeout === 'undefined'
			? Promise.resolve(value)
			: new Promise<T>((res) => setTimeout(res, timeout, value))
	}

	static reject = <T>(value?: T, timeout?: number) => {
		return typeof timeout === 'undefined'
			? Promise.reject(value)
			: new Promise<T>((_, rej) => setTimeout(rej, timeout, value))
	}

	static promisify = <T>(val: T | Promise<T>): Promise<T> => {
		return val?.constructor !== Promise ? Promise.resolve(val) : val
	}

	// biome-ignore lint:
	constructor() {}
}

export const { resolve, reject, promisify } = Promise_
