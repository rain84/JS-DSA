/**
 * 2677. Chunk Array
 * {@link https://leetcode.com/problems/chunk-array/ | Link}
 */
export function chunk(arr: number[], size: number): number[][] {
	const res: number[][] = []

	for (let i = 0; i < arr.length; i += size) {
		res.push(arr.slice(i, i + size))
	}

	return res
}

/** My 1st solution */
function chunk2(arr: number[], size: number): number[][] {
	const res: number[][] = []
	let tmp: number[] = []

	for (let i = 0; i < arr.length; i++) {
		tmp.push(arr[i])

		if ((i + 1) % size === 0) {
			res.push(tmp)
			tmp = []
		}
	}

	if (tmp.length) res.push(tmp)

	return res
}
