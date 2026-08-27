import { climbStairs } from './0070-climbStairs'

it.each(
	// prettier-ignore
	[
		[1, 1],
		[2, 2],
		[3, 3],
		[4, 5],
		[5, 8],
		[6, 13],
		[7, 21],
		[8, 34],
		[9, 55],
		[10, 89],
		[45, 1836311903],
	],
)('climbStairs(%i) = %i', (n, expected) => {
	expect(climbStairs(n)).toBe(expected)
})
