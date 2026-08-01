import { numRabbits } from './0781-numRabbits'

it.each(
	//  prettier-ignore
	[
		[[1, 1, 2], 5],
		[[10, 10, 10], 11],
	],
)('should work %#', (input, output) => {
	expect(numRabbits(input)).toBe(output)
})
