/**
 * 2727. Is Object Empty
 * {@link https://leetcode.com/problems/is-object-empty/ | Link}
 */

export function isEmpty(obj: Obj): boolean {
	// biome-ignore lint/correctness/noUnusedVariables: cycle is needed
	for (const x in obj) {
		return false
	}

	return true
}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | JSONValue[]

console.log(String({}))
