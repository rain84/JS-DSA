import { bucketSort } from './bucket-sort'

it.each(
	//  prettier-ignore
	[['aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuVwXyYzZ']],
)('should work %#', (input) => {
	expect(bucketSort(shuffle(input))).toBe(input)
})

const shuffle = (s: string) => [...s].sort(() => (Math.random() > 0.5 ? 1 : -1)).join('')
