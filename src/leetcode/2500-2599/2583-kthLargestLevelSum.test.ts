import { createTree2 } from '../utils/tree'
import { kthLargestLevelSum, kthLargestLevelSum2 } from './2583-kthLargestLevelSum'

it.each(
  //  prettier-ignore
  [
    [
      [5,8,9,2,1,3,7,4,6], 2,
      13
    ],
    [
      [1,2,null,3], 1,
      3
    ]
  ]
)('should work %#', (root, k, output) => {
  expect(kthLargestLevelSum(createTree2(root), k)).toBe(output)
  expect(kthLargestLevelSum2(createTree2(root), k)).toBe(output)
})
