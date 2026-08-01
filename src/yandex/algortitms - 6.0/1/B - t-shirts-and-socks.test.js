import { solution } from './B - t-shirts-and-socks.js'

it.each(
	//  prettier-ignore
	[
		[['6', '2', '7', '3'], '3 4'],
		[['0', '2', '5', '1'], '1 6'],
	],
)('should work %#', (input, output) => {
	expect(solution(input)).toBe(output)
})
