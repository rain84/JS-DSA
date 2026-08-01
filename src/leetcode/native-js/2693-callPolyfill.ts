type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }

interface Function {
	callPolyfill(context: Record<string, JSONValue>, ...args: JSONValue[]): JSONValue
}

Function.prototype.callPolyfill = function (context, ...args): JSONValue {
	const fn = Symbol()
	const obj = { ...context, [fn]: this }
	return obj[fn](...args)
}
