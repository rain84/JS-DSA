//  Given a list of strictly positive integers,
//  partition the list into 3 contiguous partitions which each sum up to the same value.
//  If not possible, return null.
//
//  example, given the following list:
//
// [3, 5, 8, 0, 8]
//
// Return the following 3 partitions:
//
// [
//  [3, 5],
//  [8, 0],
//  [8]
// ]
//
// Which each add up to 8.

export type ResultType = number[][]
type EC = (arr: readonly number[], count: number) => ResultType | null
type Run = (
	arr: readonly number[],
	size: number,
	iInit?: number,
	result?: number[],
) => number[] | null
type GHI = (arr: readonly number[], size: number) => ReturnType<Run>

export const extractByIndexes = (arr: number[], sortedIndexes: number[]) => {
	const array = [...arr]
	const chunk: number[] = []

	for (let i = 0; i < sortedIndexes.length; i++) {
		const idx = sortedIndexes[i]

		chunk.push(arr[idx])
		delete arr[idx]
	}

	const restArray = arr.filter((val) => typeof val === 'number')

	return { chunk, restArray }
}

export const getChunkIndexes: GHI = (arr, size) => {
	const run: Run = (arr, size, init = 0, result = []) => {
		for (let i = init; i < arr.length; i++) {
			const nextSize = size - arr[i]

			//  sum of our indexes is equal to the size of chunk
			if (nextSize === 0) {
				result.push(i)
				return result
			}

			//  recursively continue searching for rest indexes
			if (0 < nextSize) {
				result.push(i)
				const maybeResult = run(arr, nextSize, i + 1, result)

				// backtrack
				if (maybeResult === null) {
					result.pop()
					continue
				}

				//  approppriate indexes recursively finded
				return maybeResult
			}
		}

		return null
	}

	return run(arr, size)
}

// time complexity: maybe O(n^2)
export const equalChunks: EC = (arr, count) => {
	if (arr.length === 0) return null

	const size = arr.reduce((a, b) => a + b) / count

	if (!Number.isInteger(size)) return null
	if (arr.some((item) => item > size)) return null

	const res: ResultType = []
	let array = [...arr]

	while (count--) {
		const indexes = getChunkIndexes(array, size)
		if (!indexes) continue

		const extracted = extractByIndexes(array, indexes)
		array = extracted.restArray
		res.push(extracted.chunk)
	}

	return res
}
