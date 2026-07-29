import { createTree, type TreeNode } from '../utils/tree'
import { invertTree } from './0226-invertTree'

it('should work 1', () => {
  const tree1 = createTree([4, [2, 1, 3], [7, 6, 9]])
  const tree2 = createTree([4, [7, 9, 6], [2, 3, 1]])

  expect(invertTree(tree1)).toMatchObject(tree2 as TreeNode)
})

it('should work 2', () => {
  const tree1 = createTree('2 1 3')
  const tree2 = createTree('2 3 1')

  expect(invertTree(tree1)).toMatchObject(tree2 as TreeNode)
})

it('should work 3', () => {
  const tree1 = createTree('')
  const tree2 = createTree('')

  expect(invertTree(tree1)).toBe(tree2 as TreeNode)
})
