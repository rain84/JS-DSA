/**
 * 2666. Allow One Function Call
 * {@link https://leetcode.com/problems/allow-one-function-call/ | Link}
 */
export const once =
	(fn?: Fn): OnceFn =>
	(...args) => {
		const res = fn?.(...args)
		fn = undefined
		return res
	}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }

type OnceFn = (...args: JSONValue[]) => JSONValue | undefined
