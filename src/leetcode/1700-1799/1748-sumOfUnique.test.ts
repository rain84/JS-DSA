import { sumOfUnique } from './1748-sumOfUnique'

it('should work 1', () => {
  expect(sumOfUnique([1, 2, 3, 2])).toBe(4)
})

it('should work 2', () => {
  expect(sumOfUnique([1, 1, 1, 1, 1])).toBe(0)
})

it('should work 3', () => {
  expect(sumOfUnique([1, 2, 3, 4, 5])).toBe(15)
})
