import { findSmallestSetOfVertices } from './1557-findSmallestSetOfVertices'

it('should work 1', () => {
  const n = 6
  const edges = [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ]
  expect(findSmallestSetOfVertices(n, edges)).toMatchObject([0, 3])
})

it('should work 2', () => {
  const n = 5
  const edges = [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ]
  expect(findSmallestSetOfVertices(n, edges)).toMatchObject([0, 2, 3])
})
