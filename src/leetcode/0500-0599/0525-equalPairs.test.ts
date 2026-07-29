import { equalPairs } from './0525-equalPairs'

it('should work 1', () => {
  const input = [
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ]
  expect(equalPairs(input)).toBe(1)
})

it('should work 2', () => {
  const input = [
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ]
  expect(equalPairs(input)).toBe(3)
})
