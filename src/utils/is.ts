export const isPOJO = (x: unknown): x is Record<Any, Any> => {
	if (x == null || typeof x !== 'object') return false

	const proto = Object.getPrototypeOf(x)
	return proto === Object.prototype || proto === null
}
