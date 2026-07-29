import { reversePrefix } from './2000-reversePrefix'

it('should work 1', () => {
  expect(reversePrefix('abcdefd', 'd')).toBe('dcbaefd')
})

it('should work 2', () => {
  expect(reversePrefix('xyxzxe', 'z')).toBe('zxyxxe')
})

it('should work 3', () => {
  expect(reversePrefix('abcd', 'z')).toBe('abcd')
})
