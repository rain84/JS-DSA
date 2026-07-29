import { repeatedCharacter } from './2351-repeatedCharacter'

it('should work 1', () => {
  expect(repeatedCharacter('abccbaacz')).toBe('c')
})

it('should work 2', () => {
  expect(repeatedCharacter('abcdd')).toBe('d')
})
