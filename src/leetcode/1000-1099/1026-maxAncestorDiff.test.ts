import { createTree } from '../utils/tree'
import { maxAncestorDiff } from './1026-maxAncestorDiff'

it('should work 1', () => {
  const tree = createTree('8 [3 1 [6 4 7]] [10 null [14 13]]')
  expect(maxAncestorDiff(tree)).toBe(7)
})

it('should work 2', () => {
  const tree = createTree('1 null [2 null [0 3]]')
  expect(maxAncestorDiff(tree)).toBe(3)
})

it('should work 3', () => {
  const tree = createTree('8 null [1 [5 [2 7 3] 4] [6 0]]')
  expect(maxAncestorDiff(tree)).toBe(8)
})
