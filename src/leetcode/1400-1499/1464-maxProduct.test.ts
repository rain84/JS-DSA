import { maxProduct } from './1464-maxProduct'

it.each(
	//  prettier-ignore
	[
		[[3, 4, 5, 2], 12],
		[[1, 5, 4, 5], 16],
		[[3, 7], 12],
	],
)('should work %#', (nums, output) => {
	expect(maxProduct(nums)).toBe(output)
})
