import { minKBitFlips } from './0995-minKBitFlips'

it('should work 1', () => {
  expect(minKBitFlips([0, 1, 0], 1)).toBe(2)
})

it('should work 2', () => {
  expect(minKBitFlips([1, 1, 0], 2)).toBe(-1)
})

it('should work 3', () => {
  expect(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3)).toBe(3)
})

it('should work 4', () => {
  expect(minKBitFlips([1, 1], 2)).toBe(0)
})

it('should work 5', () => {
  expect(minKBitFlips([0, 1, 0, 0, 1, 0], 4)).toBe(3)
})
