import { createTree } from '../utils/tree'
import { countPairs } from './1530-countPairs'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,null,4], 3,
      1
    ],
    [
      [1,2,3,4,5,6,7], 3,
      2
    ],
    [
      [7,1,4,6,null,5,3,null,null,null,null,null,2], 3,
      1
    ],
    [
      [1,1,1], 2,
      1
    ],
    [
      [80,62,99,36,45,39,76,81,44,23,58,8,14,1,94,100,10,8,30,75,7,33,80,44,2,67,78,64,30,98,100,24,48,42,31,91,37,81,45,30,77,28], 8,
      122
    ]
  ]
)('should work %#', (root, distance, output) => {
  expect(countPairs(createTree(root), distance)).toBe(output)
})
