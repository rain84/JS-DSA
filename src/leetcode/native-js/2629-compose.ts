/**
 * 2629. Function Composition
 * {@link https://leetcode.com/problems/function-composition/ | Link}
 */
export const compose =
	(functions: F[]): F =>
	(x) =>
		functions.reduceRight((args, fn) => fn(args), x)

export type F = (x: number) => number
