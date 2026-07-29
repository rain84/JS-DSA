import { minMovesToSeat } from './2037-minMovesToSeat'

it('should work 1', () => {
  expect(minMovesToSeat([3, 1, 5], [2, 7, 4])).toBe(4)
})

it('should work 2', () => {
  expect(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7)
})

it('should work 3', () => {
  expect(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4)
})

it('should work 4', () => {
  expect(minMovesToSeat([12, 14, 19, 19, 12], [19, 2, 17, 20, 7])).toBe(19)
})
