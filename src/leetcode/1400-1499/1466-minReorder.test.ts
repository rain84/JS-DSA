import { minReorder } from './1466-minReorder'

it('should work 1', () => {
  const n = 6
  const connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ]
  expect(minReorder(n, connections)).toBe(3)
})

it('should work 2', () => {
  const n = 5
  const connections = [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ]
  expect(minReorder(n, connections)).toBe(2)
})
