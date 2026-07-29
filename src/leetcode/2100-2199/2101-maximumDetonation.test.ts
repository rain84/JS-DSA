import { maximumDetonation } from './2101-maximumDetonation'

it('should work 1', () => {
  // prettier-ignore
  expect(maximumDetonation([[2, 1, 3], [6, 1, 4]])).toBe(2)
})

it('should work 2', () => {
  // prettier-ignore
  expect(maximumDetonation([[1, 1, 5], [10, 10, 5]])).toBe(1)
})

it('should work 3', () => {
  // prettier-ignore
  expect(maximumDetonation([[1, 2, 3], [2, 3, 1], [3, 4, 2], [4, 5, 3], [5, 6, 4]])).toBe(5)
})

it('should work 4', () => {
  // prettier-ignore
  expect(maximumDetonation([[1, 1, 100000], [100000, 100000, 1]])).toBe(1)
})

it('should work 5', () => {
  // prettier-ignore
  expect(maximumDetonation([[4, 4, 3], [4, 4, 3]])).toBe(2)
})

it('should work 6', () => {
  // prettier-ignore
  expect(maximumDetonation([[1, 1, 5], [1, 1, 5]])).toBe(2)
})
