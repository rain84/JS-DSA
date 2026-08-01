import { mergeSort } from './mergeSort'

it('should work', () => {
	const array = [72, 99, 84, 95, 22, 54, 66, 80, 21, 5]
	const sorted = mergeSort(array)

	expect(sorted).toEqual([5, 21, 22, 54, 66, 72, 80, 84, 95, 99])
})
