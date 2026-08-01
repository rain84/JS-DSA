import { getMinRoof } from './roof_n_cars'

it.each(
	//  prettier-ignore
	[
		[[2, 5, 6, 12], 3, 5],
		[[12, 5, 6, 2], 3, 5],
		[[2, 5, 6, 9, 12], 4, 8],
	],
)('should work %#', (arr, n, output) => {
	expect(getMinRoof(arr, n)).toBe(output)
})
