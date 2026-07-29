import { maxDistance } from './1552-maxDistance'

it('should work 1', () => {
  expect(maxDistance([1, 2, 3, 4, 7], 3)).toBe(3)
})

it('should work 2', () => {
  expect(maxDistance([5, 4, 3, 2, 1, 1000000000], 2)).toBe(999999999)
})

it('should work 3', () => {
  expect(maxDistance([79, 74, 57, 22], 4)).toBe(5)
})

it('should work 4', () => {
  expect(maxDistance([15, 93, 21, 36, 42, 55, 12, 79], 2)).toBe(81)
})
