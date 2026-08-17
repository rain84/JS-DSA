import { chunk } from './2677-chunk'

const cases = [
	[[], 3, []],
	[[1, 2, 3], 5, [[1, 2, 3]]],
	[[1, 2, 3, 4, 5], 1, [[1], [2], [3], [4], [5]]],
	[[1, 2, 3, 4, 5], 2, [[1, 2], [3, 4], [5]]],
	[
		[1, 2, 3, 4, 5, 6],
		2,
		[
			[1, 2],
			[3, 4],
			[5, 6],
		],
	],
	[
		[1, 2, 3, 4, 5],
		3,
		[
			[1, 2, 3],
			[4, 5],
		],
	],
	[['a', 'b', 'c', 'd'], 3, [['a', 'b', 'c'], ['d']]],
	[[{ a: 1 }, { b: 2 }, { c: 3 }], 2, [[{ a: 1 }, { b: 2 }], [{ c: 3 }]]],
	[[1, 2, 3, 4, 5, 6, 7], 3, [[1, 2, 3], [4, 5, 6], [7]]],
] as const

it.each(cases)('should work %#', (input: unknown, size: number, output: unknown) => {
	expect(chunk(input as unknown[], size)).toMatchObject(output as unknown[])
})
