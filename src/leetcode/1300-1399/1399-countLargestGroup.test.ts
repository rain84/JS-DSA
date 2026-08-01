import { countLargestGroup } from './1399-countLargestGroup'

it.each(
	//  prettier-ignore
	[
		[13, 4],
		[2, 2],
	],
)('should work %#', (input, output) => {
	expect(countLargestGroup(input)).toBe(output)
})
