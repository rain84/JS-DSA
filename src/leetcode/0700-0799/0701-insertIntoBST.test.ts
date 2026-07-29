import { createTree, getTreeValues } from '../utils/tree'
import { insertIntoBST } from './0701-insertIntoBST'

it('should work 1', () => {
  const tree = createTree('4 [2 1 3] 7')
  const next = insertIntoBST(tree, 5)
  expect(getTreeValues.inorder(next)).toMatchObject([1, 2, 3, 4, 5, 7])
})

it('should work 2', () => {
  //         40
  //   20          60
  // 10  30      50  70
  // Output: [40 20 60 10 30 50 70 null null 25]
  const tree = createTree('40 [20 10 30] [60 50 70]')
  const next = insertIntoBST(tree, 25)
  expect(getTreeValues.inorder(next)).toMatchObject([10, 20, 25, 30, 40, 50, 60, 70])
})
