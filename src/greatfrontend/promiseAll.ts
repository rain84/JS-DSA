/**
 * GreatFrontEnd — Promise.all
 * {@link https://www.greatfrontend.com/questions/javascript/promise-all | Link}
 *
 * Implement Promise.all(iterable) that returns a Promise which:
 * - resolves with array of resolved values in order, if all promises fulfill
 * - rejects with reason of first rejected promise, if any rejects
 * - handles non-promise values and thenables
 */

export function promiseAll<T extends readonly unknown[] | []>(
	iterable: T,
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
	return new Promise((resolve, reject) => {
		const items = [...iterable]
		const length = items.length

		if (length === 0) {
			resolve([] as { -readonly [P in keyof T]: Awaited<T[P]> })
			return
		}

		let completed = 0
		let isRejected = false
		const res: Awaited<T[number]>[] = Array(length)

		items.forEach((item, i) => {
			Promise.resolve(item)
				.then((x) => {
					res[i] = x
					if (++completed === length) {
						resolve(res as { -readonly [P in keyof T]: Awaited<T[P]> })
					}
				})
				.catch((e) => {
					if (!isRejected) {
						isRejected = true
						reject(e)
					}
				})
		})
	})
}
