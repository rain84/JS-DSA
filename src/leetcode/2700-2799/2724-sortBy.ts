/**
 * 2724. Sort By
 * {@link https://leetcode.com/problems/sort-by/ | Link}
 */
export function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
	return [...arr].sort((a, b) => fn(a) - fn(b))
}

export type JSONValue =
	| null
	| boolean
	| number
	| string
	| JSONValue[]
	| { [key: string]: JSONValue }
type Fn = (value: JSONValue) => number
