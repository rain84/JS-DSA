import { createTree } from '../utils/tree'
import { diameterOfBinaryTree } from './0543-diameterOfBinaryTree'

it('should work 1', () => {
  const tree = createTree('1 [2 4 5] 3')
  expect(diameterOfBinaryTree(tree)).toBe(3)
})

it('should work 2', () => {
  const tree = createTree('1 2')
  expect(diameterOfBinaryTree(tree)).toBe(1)
})

it('should work 3', () => {
  const tree = createTree(
    '4 -7 [-3 [-9 [9 [6 [0 null -1] [6 -4]]] [-7 [-6 5] [-6 [9 -2]]] ] [-3 -4]]'
  )
  expect(diameterOfBinaryTree(tree)).toBe(8)
})
