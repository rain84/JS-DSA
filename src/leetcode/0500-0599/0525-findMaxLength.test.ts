import { findMaxLength } from './0525-findMaxLength'

it('should work 0', () => {
  expect(findMaxLength([0, 0, 0, 1, 1, 1])).toBe(6)
})

it('should work 1', () => {
  expect(findMaxLength([0, 1])).toBe(2)
})

it('should work 2', () => {
  expect(findMaxLength([0, 1, 0])).toBe(2)
})

it('should work 3', () => {
  expect(findMaxLength([0, 1, 1])).toBe(2)
})

it('should work 4', () => {
  expect(findMaxLength([0, 1, 0, 1])).toBe(4)
})

it('should work 5', () => {
  expect(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0])).toBe(4)
})

it('should work 6', () => {
  expect(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])).toBe(6)
})

it('should work 7', () => {
  expect(
    findMaxLength([
      0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0,
      1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1,
      1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
      1, 1, 0, 0, 0, 1, 1,
    ])
  ).toBe(68)
})
