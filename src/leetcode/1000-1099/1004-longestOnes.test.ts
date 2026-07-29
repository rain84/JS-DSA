import { longestOnes } from './1004-longestOnes'

it('should work', () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6)
})

it('should work 2', () => {
  expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10)
})

it('should work 3', () => {
  expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 0)).toBe(4)
})
