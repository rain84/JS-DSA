import { equalSubstring } from './1208-equalSubstring'

it('should work 1', () => {
  expect(equalSubstring('abcd', 'bcdf', 3)).toBe(3)
})

it('should work 2', () => {
  expect(equalSubstring('abcd', 'cdef', 3)).toBe(1)
})

it('should work 3', () => {
  expect(equalSubstring('abcd', 'acde', 0)).toBe(1)
})
