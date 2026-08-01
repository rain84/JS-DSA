/* eslint-disable no-lone-blocks */

export const applyNumberMonkeyPatching = (fn) => {
	const p = new Proxy(Number.prototype, {
		get: (target, name, receiver) => {
			if (Object.hasOwn(target, name)) return Reflect.set(target, name, receiver)

			// biome-ignore lint:
			const operator = globalThis.eval(name)
			if (typeof operator !== 'function') return

			const i = receiver
			return fn(operator, i)
		},
	})

	Object.setPrototypeOf(Number.prototype, p)
}
