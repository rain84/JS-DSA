export const bind =
	(fn: Fn, ctx: object, ...args: Any): Fn =>
	(...args2: Any) =>
		fn.apply(ctx, [...args, args2])

type Fn = (...args: Any[]) => unknown

const obj = {
	c: 3,
	fn: null,
}

const fn = function (this: typeof obj, a: number, b: string) {
	return a.toString() + b + (this.c || '')
}

// console.log(obj.fn(1, '2'))

const bindedFn = bind(fn, obj, 1)
console.log(bindedFn('2'))
