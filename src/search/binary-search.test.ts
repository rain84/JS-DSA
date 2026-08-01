import { binarySearch, bsInsert, bsLeftDuplicated } from './binary-search'

const a = [4, 19, 22, 60, 60, 63, 66, 67, 69, 69, 70, 76, 85, 85, 86, 90, 95, 98, 100]

it.each(
	//  prettier-ignore
	[[4], [76], [100]],
)('binarySearch should work %#', (x) => {
	expect(binarySearch(a, x)).toBe(a.indexOf(x))
})

it.each([
	[69, a.indexOf(70)],
	[22, a.indexOf(60)],
	[100, a.length],
])('binarySearch_Insert should work %#', (x, output) => {
	expect(bsInsert(a, x)).toBe(output)
})

it.each(
	//  prettier-ignore
	[[69], [85]],
)('binarySearch_LeftDuplicated should work %#', (x) => {
	expect(bsLeftDuplicated(a, x)).toBe(a.indexOf(x))
})
