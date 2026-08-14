import './2631-groupBy'

it.each([
	[[1, 2, 3, 4, 5], (n: number) => String(n % 2), { '0': [2, 4], '1': [1, 3, 5] }],
	[
		[
			{ id: 1, type: 'a' },
			{ id: 2, type: 'b' },
			{ id: 3, type: 'a' },
		],
		(item: { id: number; type: string }) => item.type,
		{
			a: [
				{ id: 1, type: 'a' },
				{ id: 3, type: 'a' },
			],
			b: [{ id: 2, type: 'b' }],
		},
	],
	[
		['apple', 'banana', 'cherry', 'date'],
		(s: string) => s[0],
		{ a: ['apple'], b: ['banana'], c: ['cherry'], d: ['date'] },
	],
	[[], (n: number) => String(n), {}],
	[[1.1, 2.2, 3.3], (n: number) => String(Math.floor(n)), { '1': [1.1], '2': [2.2], '3': [3.3] }],
] as const)('should work %#', (input, fn, output) => {
	expect((input as []).groupBy(fn)).toMatchObject(output)
})
