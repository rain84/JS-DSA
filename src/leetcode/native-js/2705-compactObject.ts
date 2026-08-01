/**
 * 2705. Compact Object
 * {@link https://leetcode.com/problems/compact-object/ | Link}
 */

/** Fastest one */
export function compactObject(obj: Obj): Obj {
	if (!obj || typeof obj !== 'object') return obj

	if (Array.isArray(obj)) {
		const res: JSONValue[] = []

		for (const x of obj) {
			if (!x) continue
			res.push(typeof x === 'object' ? compactObject(x) : x)
		}

		return res
	}

	const res: Obj = {}
	for (const [key, x] of Object.entries(obj)) {
		if (!x) continue
		res[key] = typeof x === 'object' ? compactObject(x) : x
	}

	return res
}

export function compactObject2(obj: Obj): Obj {
	if (!obj || typeof obj !== 'object') return obj

	if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject2)

	return Object.fromEntries(
		Object.entries(obj)
			.filter(([_, x]) => Boolean(x))
			.map(([k, v]) => [k, compactObject2(v)]),
	)
}

/** Most concise */
export function compactObject3(obj: Obj): Obj {
	if (!obj || typeof obj !== 'object') return obj

	if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject3)

	return Object.entries(obj).reduce<Record<string, JSONValue>>((acc, [k, v]) => {
		if (v) acc[k] = compactObject3(v)
		return acc
	}, {})
}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue> | JSONValue
