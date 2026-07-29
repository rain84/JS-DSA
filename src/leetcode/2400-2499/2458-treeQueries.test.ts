import { createTree } from '../utils/tree'
import { treeQueries } from './2458-treeQueries'

it.each(
  //  prettier-ignore
  [
    [
      [1, [3, 2], [4, 6, [5, null, 7]]], [4],
      [2]
    ],
    [
      [5, [8, [2, 4, 6], 1], [9, 3, 7]], [3,2,4,8],
      [3,2,3,2]
    ],
    [
      [1, null, [5, [3, 2, 4]]], [3,5,4,2,4],
      [1,0,3,3,3]
    ],
    [
      [5,8,9,2,1,3,7,4,6], [3,2,4,8],
      [3,2,3,2]
    ]
  ]
)('should work %#', (root, queries, output) => {
  expect(treeQueries(createTree(root), queries)).toMatchObject(output)
})
