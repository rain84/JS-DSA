import { createTree } from './tree-create'
import { getTreeValues } from './tree-get-values'

it('getTreeValues.preorder() should work', () => {
  //       4
  //   2       6
  // 1   3   5   7
  const tree = createTree('4 [2 1 3] [6 5 7]')
  expect(getTreeValues.preorder(tree)).toMatchObject([4, 2, 1, 3, 6, 5, 7])
})

it('getTreeValues.inorder() should work', () => {
  const tree = createTree('4 [2 1 3] [6 5 7]')
  expect(getTreeValues.inorder(tree)).toMatchObject([1, 2, 3, 4, 5, 6, 7])
})

it('getTreeValues.postorder() should work', () => {
  const tree = createTree('4 [2 1 3] [6 5 7]')
  expect(getTreeValues.postorder(tree)).toMatchObject([1, 3, 2, 5, 7, 6, 4])
})
