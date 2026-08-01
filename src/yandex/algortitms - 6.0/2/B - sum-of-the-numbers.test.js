import { solution } from './B - sum-of-the-numbers'

it.each(
	//  prettier-ignore
	[
		[['5 17', '17 7 10 7 10'], 4],
		[['5 10', '1 2 3 4 1'], 2],
		[['1 1', '1'], 1],
	],
)('should work %#', (input, output) => {
	expect(solution(input)).toBe(output)
})
