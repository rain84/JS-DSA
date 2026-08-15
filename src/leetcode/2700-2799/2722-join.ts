/**
 * 2722. Join Two Arrays by ID
 * {@link https://leetcode.com/problems/join-two-arrays-by-id/ | Link}
 */
export function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
	const map: Map<number, ArrayType> = new Map(arr1.map((x) => [x.id, x]))

	for (const val2 of arr2) {
		const val1 = map.get(val2.id) ?? {}
		map.set(val2.id, { ...val1, ...val2 })
	}

	const res: ArrayType[] = [...map.values()].sort((a, b) => a.id - b.id)

	return res
}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type ArrayType = { id: number } & Record<string, JSONValue>
