import { create } from '../utils/linked-list'
import { type Arr, createTree } from '../utils/tree'
import { isSubPath } from './1367-isSubPath'

const root = [1, [4, null, [2, 1]], [4, [2, 6, [8, 1, 3]]]]

it.each(
  //  prettier-ignore
  [
    [
      [4,2,8], root,
      true
    ],
    [
      [1,4,2,6], root,
      true
    ],
    [
      [1,4,2,6,8], root,
      false
    ],
    [
      [1,10], [1,null,[1,10,[1,9]]],
      true
    ],
    [
      [2,2,1], [2,null,2,null,2,null,1],
      true
    ]
  ]
)('should work %#', (head, root, output) => {
  expect(isSubPath(create(head), createTree(root as Arr))).toBe(output)
})
