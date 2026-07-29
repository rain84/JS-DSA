import { numTilePossibilities } from './1079-numTilePossibilities'

it('should work 1', () => {
  // "A", "AA", "B", "AB", "BA", "AAB", "ABA", "BAA".
  expect(numTilePossibilities('AAB')).toBe(8)
})

it('should work 2', () => {
  expect(numTilePossibilities('AAABBC')).toBe(188)
})
