export const compose =
	(...fns) =>
	(...args) =>
		fns.reduceRight((args, fn) => fn(...(Array.isArray(args) ? args : [args])), args)

export const composeRecursive = (...fns) => {
	const last = fns.pop()
	if (!fns.length) return (...args) => last(...args)

	const prev = fns.pop()
	fns.push((...args) => {
		let res = last(...args)
		if (!Array.isArray(res)) res = [res]
		return prev(...res)
	})

	return composeRecursive(...fns)
}

// TODO: fix case with injecting multiple arguments
export const composeRecursive2 =
	(...fns) =>
	(...args) => {
		const wrapper =
			(fn) =>
			(next) =>
			(...args) =>
				next(fn(...args))

		const _compose = (...fns) => {
			if (fns.length === 1) return fns[0]

			const fn = wrapper(fns.pop())(fns.pop())
			// const fn = wrapper(curry(fns.pop()))(curry(fns.pop()))
			fns.push(fn)

			return _compose(...fns)
		}

		return _compose(...fns)(...args)
	}
