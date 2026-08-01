export const isUndefined = <T>(...args: MaybeUndefined<T>[] | [MaybeUndefined<T>[]]) =>
	(Array.isArray(args[0]) ? args[0] : args).some((x) => x === undefined)
