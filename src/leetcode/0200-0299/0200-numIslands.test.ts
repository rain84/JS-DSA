import { numIslands } from './0200-numIslands'

it('should work 1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]

  expect(numIslands(grid)).toBe(1)
})

it('should work 2', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]

  expect(numIslands(grid)).toBe(3)
})

it('should work 3', () => {
  const grid = [['1', '0', '1', '1', '0', '1', '1']]

  expect(numIslands(grid)).toBe(3)
})

it('should work 4', () => {
  const grid = [
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '0', '1'],
    ['1', '1', '1', '0', '1'],
  ]

  expect(numIslands(grid)).toBe(1)
})
