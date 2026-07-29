import { findMaxAverage } from './0643-findMaxAverage'

it('should work', () => {
  expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75)
})

it('should work 2', () => {
  expect(findMaxAverage([5], 1)).toBe(5)
})
