import { solution } from './C-'

it.each(
	//  prettier-ignore
	[
		[['4 4', '1 3 5 8'], 2],
		[['5 2', '1 2 5 7 13'], 2],
		[['10 3', '11 38 46 49 57 59 62 65 67 72'], 5],
	],
)('should work %#', (input, output) => {
	expect(solution(input)).toBe(output)
})
