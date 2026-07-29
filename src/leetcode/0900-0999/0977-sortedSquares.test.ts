import { sortedSquares } from './0977-sortedSquares'

it('should work', () => {
  expect(sortedSquares([-4, -1, 0, 3, 10])).toMatchObject([0, 1, 9, 16, 100])
})

it('should work too', () => {
  expect(sortedSquares([-7, -3, 2, 3, 11])).toMatchObject([4, 9, 9, 49, 121])
})

it('should work with all negative values', () => {
  expect(sortedSquares([-5, -3, -2, -1])).toMatchObject([1, 4, 9, 25])
})

it('should work with all positive values', () => {
  expect(sortedSquares([0, 1, 2, 3, 4, 5])).toMatchObject([0, 1, 4, 9, 16, 25])
})
