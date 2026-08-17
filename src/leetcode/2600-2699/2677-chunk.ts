/**
 * 2677. Chunk Array
 * {@link https://leetcode.com/problems/chunk-array/ | Link}
 */

export function chunk<T>(arr: T[], size: number): T[][] {
	if (!arr.length) return []
	if (arr.length <= size) return [arr]

	const res: T[][] = []
	const fullChunks = Math.floor(arr.length / size)

	for (let i = 0; i < fullChunks; i++) {
		res.push(arr.slice(i * size, (i + 1) * size))
	}

	const reminder = arr.length % size
	if (reminder) {
		res.push(arr.slice(fullChunks * size))
	}

	return res
}
