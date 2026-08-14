/**
 * 2631. Group By
 * {@link https://leetcode.com/problems/group-by | Link}
 */

// biome-ignore lint/correctness/noUnusedVariables: declaration merging for Array.prototype.groupBy
interface Array<T> {
	groupBy<K extends PropertyKey>(fn: (item: T) => K): Record<K, T[]>
}

Array.prototype.groupBy = function <T, K extends PropertyKey>(fn: (item: T) => K): Record<K, T[]> {
	const res: Record<K, T[]> = {} as Record<K, T[]>

	for (const item of this) {
		const key = fn(item)
		if (!res[key]) res[key] = []
		res[key].push(item)
	}

	return res
}
