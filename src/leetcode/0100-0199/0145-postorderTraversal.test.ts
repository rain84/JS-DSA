import { createTree } from '../utils/tree'
import { postorderTraversal } from './0145-postorderTraversal'

it.each(
  //  prettier-ignore
  [
    [
      [1,null,[2,3]],
      [3,2,1]
    ],
    [
      [],
      []
    ],
    [
      [1],
      [1]
    ]
  ]
)('should work %#', (input, output) => {
  expect(postorderTraversal(createTree(input))).toMatchObject(output)
})
