/**
 * 2625. Flatten Deeply Nested Array
 * {@link https://leetcode.com/problems/flatten-deeply-nested-array/ | Link}
 */
export const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
	if (!n) return arr

	const res: MultiDimensionalArray = []

	for (const x of arr) {
		if (Array.isArray(x) && n) res.push(...flat(x, n - 1))
		else res.push(x)
	}

	return res
}

type MultiDimensionalArray = (number | MultiDimensionalArray)[]
