import { heightChecker } from './1051-heightChecker'

it('should work 1', () => {
  expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3)
})

it('should work 2', () => {
  expect(heightChecker([5, 1, 2, 3, 4])).toBe(5)
})

it('should work 3', () => {
  expect(heightChecker([1, 2, 3, 4, 5])).toBe(0)
})
