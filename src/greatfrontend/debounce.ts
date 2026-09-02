/**
 * GreatFrontEnd — Debounce
 * {@link https://www.greatfrontend.com/questions/javascript/debounce | Link}
 *
 * Implement debounce(func, wait) that delays invoking func until after wait ms
 * have elapsed since the last time the debounced function was invoked.
 * - func is invoked with the last arguments and `this` context
 * - Returns a debounced function with `.cancel()` to cancel pending invocation
 */
/** biome-ignore-all lint/complexity/noBannedTypes: for learninig purposes */
export function debounce(func: Function, wait: number): Function {
	let timerId: ReturnType<typeof setTimeout> | null = null

	// biome-ignore lint/suspicious/noExplicitAny: for learninig purposes
	function f(this: any, ...args: any[]) {
		if (timerId !== null) clearTimeout(timerId)

		timerId = setTimeout(() => {
			timerId = null
			func.apply(this, args)
		}, wait)
	}

	f.cancel = () => {
		if (timerId !== null) {
			clearTimeout(timerId)
			timerId = null
		}
	}

	return f
}
