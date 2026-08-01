export const random = (length: number, max = length) =>
	new Array(length).fill(0).map(() => ~~(Math.random() * (max + 1)))

export const random2 = (length: number) =>
	Array.apply(null, { length } as Array<unknown>).map(Function.call, Math.random)

export const format = (arr: unknown[]) => `[${arr.join(', ')}]`
