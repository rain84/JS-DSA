import { TreeNode, createTree } from '../utils/tree'
import { distanceK } from './0863-distanceK'

it('should work 1', () => {
  const root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
  //                         3
  //             5                   1
  //       6           2          0    8
  // null    null    7   4
  const target = new TreeNode(5)
  const k = 2
  const output = distanceK(createTree('3 [5 6 [2 7 4]] [1 0 8]'), target, k)
  expect(output.sort()).toMatchObject([7, 4, 1].sort())
})

it('should work 2', () => {
  const target = new TreeNode(1)
  const k = 3
  expect(distanceK(createTree('1'), target, k)).toMatchObject([])
})
