import { maxVowels } from './1456-maxVowels'

it('should work 1', () => {
  expect(maxVowels('abciiidef', 3)).toBe(3)
})

it('should work 2', () => {
  expect(maxVowels('aeiou', 2)).toBe(2)
})

it('should work 3', () => {
  expect(maxVowels('leetcode', 3)).toBe(2)
})

it('should work 4', () => {
  expect(maxVowels('"ibpbhixfiouhdljnjfflpapptrxgcomvnb"', 33)).toBe(7)
})
