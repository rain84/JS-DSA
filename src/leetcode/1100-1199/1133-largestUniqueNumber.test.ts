import { largestUniqueNumber } from './1133-largestUniqueNumber'

it('should work 1', () => {
  expect(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])).toBe(8)
})

it('should work 2', () => {
  expect(largestUniqueNumber([9, 9, 8, 8])).toBe(-1)
})
