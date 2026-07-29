import { reachableNodes } from './2368-reachableNodes'

it('should work 1', () => {
  const n = 7
  const edges = [
    [0, 1],
    [1, 2],
    [3, 1],
    [4, 0],
    [0, 5],
    [5, 6],
  ]
  const restricted = [4, 5]
  expect(reachableNodes(n, edges, restricted)).toBe(4)
})

it('should work 2', () => {
  const n = 7
  const edges = [
    [0, 1],
    [0, 2],
    [0, 5],
    [0, 4],
    [3, 2],
    [6, 5],
  ]
  const restricted = [4, 2, 1]
  expect(reachableNodes(n, edges, restricted)).toBe(3)
})
