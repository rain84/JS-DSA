import { findLucky } from './1394-findLucky'

it('should work 1', () => {
  expect(findLucky([2, 2, 3, 4])).toBe(2)
})

it('should work 2', () => {
  expect(findLucky([1, 2, 2, 3, 3, 3])).toBe(3)
})

it('should work 3', () => {
  expect(findLucky([2, 2, 2, 3, 3])).toBe(-1)
})

it('should work 4', () => {
  expect(
    findLucky([
      5, 4, 7, 8, 4, 8, 8, 3, 7, 7, 6, 3, 7, 6, 5, 6, 8, 4, 5, 7, 4, 7, 7, 5, 2, 5, 6, 6, 8, 1, 6,
      8, 8, 8, 9, 3, 2, 9,
    ])
  ).toBe(8)
})
