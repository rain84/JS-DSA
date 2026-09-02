/**
 * GreatFrontEnd — Curry
 * {@link https://www.greatfrontend.com/questions/javascript/curry | Link}
 *
 * Implement curry(func) that returns a curried version of func.
 * - Curried function can be called with any number of arguments
 * - If enough arguments are provided, func is invoked
 * - Otherwise, returns a function that collects more arguments
 * - Preserves `this` context
 */
export function curry<F extends (...args: any[]) => any>(func: F): Curried<F> {
	function wrapper(this: unknown, ...args: any[]): unknown {
		if (func.length <= args.length) {
			return func.apply(this, args)
		}
		return wrapper.bind(this, ...args)
	}

	return wrapper as Curried<F>
}

type Curried<F> = F extends (...args: infer A) => infer R
	? A extends []
		? () => R
		: <P extends any[]>(
				...args: P
			) => P extends A
				? R
				: A extends [...P, ...infer Rest]
					? Rest extends any[]
						? Curried<(...args: Rest) => R>
						: never
					: never
	: never
