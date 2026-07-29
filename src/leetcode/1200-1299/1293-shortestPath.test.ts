import { shortestPath } from './1293-shortestPath'

it('should work 1', () => {
  const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0],
    [0, 1, 1],
    [0, 0, 0],
  ]
  const k = 1
  expect(shortestPath(grid, k)).toBe(6)
})

it('should work 2', () => {
  const grid = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 0, 0],
  ]
  const k = 1
  expect(shortestPath(grid, k)).toBe(-1)
})

it('should work 3', () => {
  const grid = [[0]]
  const k = 1
  expect(shortestPath(grid, k)).toBe(0)
})
