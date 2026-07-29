import { createTree, createTree2 } from './tree-create'
import { getTreeValues } from './tree-get-values'

it('createTree() from should work', () => {
  const treeFromString = createTree('3 5 [2 [1 null 0] [7 [] 4]]')
  const treeFromArray = createTree([3, 5, [2, [1, null, 0], [7, null, 4]]])

  expect(getTreeValues.postorder(treeFromString)).toMatchObject([5, 0, 1, 4, 7, 2, 3])
  expect(getTreeValues.postorder(treeFromArray)).toMatchObject([5, 0, 1, 4, 7, 2, 3])
})

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,5,6,7],
      [4,2,5,1,6,3,7]
    ],
    [
      [236, 104, 701, null, 227, null, 911],
      [104, 227, 236, 701, 911]
    ]
  ]
)('should work %#', (input, output) => {
  expect(getTreeValues.inorder(createTree2(input))).toMatchObject(output)
})
