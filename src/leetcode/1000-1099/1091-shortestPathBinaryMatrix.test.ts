import { shortestPathBinaryMatrix } from './1091-shortestPathBinaryMatrix'

it('should work 1', () => {
  const grid = [
    [0, 1],
    [1, 0],
  ]
  expect(shortestPathBinaryMatrix(grid)).toBe(2)
})

it('should work 2', () => {
  const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]
  expect(shortestPathBinaryMatrix(grid)).toBe(4)
})

it('should work 3', () => {
  const grid = [
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]
  expect(shortestPathBinaryMatrix(grid)).toBe(-1)
})

it('should work 4', () => {
  const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  expect(shortestPathBinaryMatrix(grid)).toBe(4)
})

it('should work 5', () => {
  const grid = [
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ]
  expect(shortestPathBinaryMatrix(grid)).toBe(4)
})

it('should work 6', () => {
  const grid = [
    [0, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0],
  ]
  expect(shortestPathBinaryMatrix(grid)).toBe(14)
})
