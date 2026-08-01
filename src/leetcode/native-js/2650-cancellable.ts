/**
 * 2650. Design Cancellable Function
 * {@link https://leetcode.com/problems/design-cancellable-function/ | Link}
 */
export function cancellable<T>(
	// biome-ignore lint: no-explicit-any
	generator: Generator<Promise<any> | any, T, unknown>,
): [() => void, Promise<T>] {
	let isCanceled = false
	const cancel = () => (isCanceled = true)

	const promise = new Promise<T>((done, fail) => {
		// biome-ignore lint:
		let e: any
		let x: T | undefined
		let res: ReturnType<typeof generator.next> | ReturnType<typeof generator.throw>

		const run = async () => {
			try {
				if (isCanceled) {
					res = generator.throw('Cancelled')
					if (res.value !== undefined) x = res.value
				} else {
					res = generator.next(x)
					const { value, done } = res
					if (!done || value !== undefined) {
						x = value instanceof Promise ? await value : value
					}
				}
			} catch (error) {
				e = error
			}

			if (!res?.done && !e) {
				setTimeout(run)
				return
			}

			if (e) fail(e)
			else done(x!)
		}

		run()
	})

	return [cancel, promise]
}
