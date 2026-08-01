import { solution } from './C - min-segment'

it.each(
	//  prettier-ignore
	[
		[
			['7 3', '1 3 2 4 5 3 1'],
			`1
2
2
3
1`,
		],
	],
)('should work %#', (input, output) => {
	expect(solution(input)).toBe(output)
})
