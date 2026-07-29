import { smallestChair } from './1942-smallestChair'

it.each(
	//  prettier-ignore
	[
		[
			[
				[1, 4],
				[2, 3],
				[4, 6],
			],
			1,
			1,
		],
		[
			[
				[3, 10],
				[1, 5],
				[2, 6],
			],
			0,
			2,
		],
	],
)('should work %#', (times, targetFriend, output) => {
	expect(smallestChair(times, targetFriend)).toBe(output)
})
