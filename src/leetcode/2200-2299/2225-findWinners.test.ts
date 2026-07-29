import { findWinners } from './2225-findWinners'

it('should work 1', () => {
  // prettier-ignore
  const input = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ]

  expect(findWinners(input)).toMatchObject([
    [1, 2, 10],
    [4, 5, 7, 8],
  ])
})

it('should work 2', () => {
  // prettier-ignore
  const input = [
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4],
  ]

  expect(findWinners(input)).toMatchObject([[1, 2, 5, 6], []])
})
