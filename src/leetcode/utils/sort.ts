/**
 * Canonical string for order-insensitive comparison of arrays in tests.
 * Sorts the outer array by JSON representation, keeps inner order intact.
 */
export function sort(value: unknown): string {
	if (!Array.isArray(value)) {
		return JSON.stringify(value) ?? String(value)
	}
	return `[${[...value].map((item) => JSON.stringify(item)).sort().join(',')}]`
}
