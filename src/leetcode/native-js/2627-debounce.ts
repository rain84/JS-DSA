/**
 * 2627. Debounce
 * {@link https://leetcode.com/problems/debounce/ | Link}
 */
export const debounce = (fn: Fn, t: number): Fn => {
	let timerId: ReturnType<typeof globalThis.setTimeout>

	return (...args) => {
		if (timerId) globalThis.clearTimeout(timerId)
		timerId = globalThis.setTimeout(() => fn(...args), t)
	}
}
