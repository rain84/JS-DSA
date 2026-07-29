import { minIncrementForUnique } from './0945-minIncrementForUnique'

it('should work 1', () => {
  expect(minIncrementForUnique([1, 2, 2])).toBe(1)
})

it('should work 2', () => {
  expect(minIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6)
})

it('should work 3', () => {
  expect(minIncrementForUnique([7, 2, 7, 2, 1, 4, 3, 1, 4, 8])).toBe(16)
})

it('should work 4', () => {
  expect(minIncrementForUnique([2, 2, 2, 1])).toBe(3)
})
