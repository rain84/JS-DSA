import { nearestExit } from './1926-nearestExit'

it('should work 1', () => {
  const maze = [
    ['+', '+', '.', '+'],
    ['.', '.', '.', '+'],
    ['+', '+', '+', '.'],
  ]
  const entrance = [1, 2]
  expect(nearestExit(maze, entrance)).toBe(1)
})

it('should work 2', () => {
  const maze = [
    ['+', '+', '+'],
    ['.', '.', '.'],
    ['+', '+', '+'],
  ]
  const entrance = [1, 0]
  expect(nearestExit(maze, entrance)).toBe(2)
})

it('should work 3', () => {
  const maze = [['.', '+']]
  const entrance = [0, 0]
  expect(nearestExit(maze, entrance)).toBe(-1)
})
