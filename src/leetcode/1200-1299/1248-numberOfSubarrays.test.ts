import { numberOfSubarrays } from './1248-numberOfSubarrays'

it('should work 1', () => {
  expect(numberOfSubarrays([1, 1, 2, 1, 1], 3)).toBe(2)
})

it('should work 2', () => {
  expect(numberOfSubarrays([2, 4, 6], 1)).toBe(0)
})

it('should work 3', () => {
  expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16)
})

it('should work 4', () => {
  expect(numberOfSubarrays([1, 1, 1, 1, 1], 1)).toBe(5)
})
