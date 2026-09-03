/**
 * 2705. Compact Object
 * {@link https://leetcode.com/problems/compact-object/ | Link}
 */
export function compactObject(obj: Obj): Obj {
	if (Array.isArray(obj)) {
		const res: Array<JSONValue> = []

		for (const x of obj) {
			if (!x) continue
			res.push(isObj(x) ? compactObject(x) : x)
		}

		return res
	} else {
		const res: Record<string, JSONValue> = {}

		for (const key in obj) {
			if (Object.hasOwn(obj, key)) {
				const val = obj[key]
				if (!val) continue
				res[key] = isObj(val) ? compactObject(val) : val
			}
		}

		return res
	}
}

function isObj(x: unknown): x is Obj {
	return x !== null && typeof x === 'object'
}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>
