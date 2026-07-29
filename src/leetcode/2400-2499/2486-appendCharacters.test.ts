import { appendCharacters } from './2486-appendCharacters'

it('should work 1', () => {
  expect(appendCharacters('coaching', 'coding')).toBe(4)
})

it('should work 2', () => {
  expect(appendCharacters('abcde', 'a')).toBe(0)
})

it('should work 3', () => {
  expect(appendCharacters('z', 'abcde')).toBe(5)
})

it('should work 4', () => {
  expect(appendCharacters('lbg', 'g')).toBe(0)
})

it('should work 5', () => {
  expect(appendCharacters('vrykt', 'rkge')).toBe(2)
})
