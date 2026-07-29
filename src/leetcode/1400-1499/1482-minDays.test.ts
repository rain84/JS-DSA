import { minDays } from './1482-minDays'

it('should work 1', () => {
  expect(minDays([1, 10, 3, 10, 2], 3, 1)).toBe(3)
})

it('should work 2', () => {
  expect(minDays([1, 10, 3, 10, 2], 3, 2)).toBe(-1)
})

it('should work 3', () => {
  expect(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)).toBe(12)
})
