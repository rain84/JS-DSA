import { maximumSum } from './2342-maximumSum'

it('should work 1', () => {
  expect(maximumSum([18, 43, 36, 13, 7])).toBe(54)
})

it('should work 2', () => {
  expect(maximumSum([10, 12, 19, 14])).toBe(-1)
})

it('should work 3', () => {
  expect(maximumSum([4, 6, 10, 6])).toBe(12)
})
