import { input } from './input'
import { largestAndSecondLargest as l, uniqueLargest } from './uniqueLargest'

it('largestAndSecondLargest should work', () => {
	expect(l(3, [2, 1, 2])).toMatchObject([2, 1])
	expect(l(6, [5, 1, 2, 3, 4, 5])).toMatchObject([5, 4])
	expect(l(6, [5, 1, 2, 3, 4, 5])).toMatchObject([5, 4])
	expect(l(6, input)).toMatchObject([32760, 32759])
})

it('uniqueLargest should work', () => {
	expect(uniqueLargest(3, [2, 1, 2])).toMatchObject([2, 1, -1])
	expect(uniqueLargest(2, [5, 1, 2, 3, 4, 5])).toMatchObject([5, 4])
	expect(uniqueLargest(3, [5, 1, 2, 3, 4, 5])).toMatchObject([5, 4, 3])
	expect(uniqueLargest(3, input)).toMatchObject([32760, 32759, 32758])
})
