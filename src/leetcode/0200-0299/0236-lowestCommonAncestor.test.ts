import { createTree } from '../utils/tree'
import { lowestCommonAncestor } from './0236-lowestCommonAncestor'

it('should work 1', () => {
  const tree = createTree('3 [5 6 [2 7 4]] [1 0 8]')
  const p = tree?.left! //  5
  const q = tree?.right! //  1
  expect(p?.val).toBe(5)
  expect(q?.val).toBe(1)
  expect(lowestCommonAncestor(tree, p, q)?.val).toBe(3)
})

it('should work 2', () => {
  const tree = createTree('3 [5 6 [2 7 4]] [1 0 8]')
  const p = tree?.left! //  5
  const q = tree?.left?.right?.right! //  4
  expect(p?.val).toBe(5)
  expect(q?.val).toBe(4)
  expect(lowestCommonAncestor(tree, p, q)?.val).toBe(5)
})

it('should work 3', () => {
  const tree = createTree('1 2')
  const p = tree! //  1
  const q = tree?.left! //  2
  expect(p?.val).toBe(1)
  expect(q?.val).toBe(2)
  expect(lowestCommonAncestor(tree, p, q)?.val).toBe(1)
})

it('should work 4', () => {
  const tree = createTree('2 null 1')
  const p = tree?.right! //  1
  const q = tree! //  2
  expect(p?.val).toBe(1)
  expect(q?.val).toBe(2)
  expect(lowestCommonAncestor(tree, p, q)?.val).toBe(2)
})
