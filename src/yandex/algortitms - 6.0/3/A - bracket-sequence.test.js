import { solution } from './A - bracket-sequence'

it.each(
	//  prettier-ignore
	[
		[['()[]'], 'yes'],
		[['([)]'], 'no'],
		[['('], 'no'],
	],
)('should work %#', (input, output) => {
	expect(solution(input)).toBe(output)
})
