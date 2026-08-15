import { type JSONValue, sortBy } from './2724-sortBy'

it.each([
	[[5, 4, 1, 2, 3], (x: JSONValue) => x as number, [1, 2, 3, 4, 5]],
	[
		[{ x: 1 }, { x: 0 }, { x: -1 }],
		(d: JSONValue) => (d as { x: number }).x,
		[{ x: -1 }, { x: 0 }, { x: 1 }],
	],
	[
		[
			[3, 4],
			[5, 2],
			[10, 1],
		],
		(x: JSONValue) => (x as number[])[1],
		[
			[10, 1],
			[5, 2],
			[3, 4],
		],
	],
])('should work %#', (input, fn, output) => {
	expect(sortBy(input, fn)).toStrictEqual(output)
})
