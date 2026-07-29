import { lengthOfLongestSubstring } from './0003-lengthOfLongestSubstring'

it('should work 1', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
})

it('should work 2', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
})

it('should work 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})

it('should work 4', () => {
  expect(lengthOfLongestSubstring(' ')).toBe(1)
})

it('should work 5', () => {
  expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5)
})
