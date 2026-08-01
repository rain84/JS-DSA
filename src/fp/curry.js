export const curry = (fn) => {
	const wrapper = (...args) => {
		return fn.length <= args.length ? fn(...args) : wrapper.bind(null, ...args)
	}

	return wrapper
}
