/**
 * 2722. Join Two Arrays by ID
 * {@link https://leetcode.com/problems/join-two-arrays-by-id/ | Link}
 */
export function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
	const r = (acc: Obj, x: ArrayType): Obj => ((acc[x.id] = x), acc)
	const obj = arr1.reduce<Obj>(r, {})

	for (const x of arr2) {
		if (obj[x.id]) Object.assign(obj[x.id], x)
		else obj[x.id] = x
	}

	return Object.values(obj)
}

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type ArrayType = { id: number } & Record<string, JSONValue>

type Obj = Record<number, ArrayType>
