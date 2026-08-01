export function isDefined<T>(x: T): asserts x is Exclude<T, undefined | null> {
	if (x === undefined || x === null) throw new Error('Value is not defined')
}
