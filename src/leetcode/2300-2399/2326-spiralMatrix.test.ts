import { create } from '../utils/linked-list'
import { spiralMatrix } from './2326-spiralMatrix'

it.each(
  //  prettier-ignore
  [
    [
      3, 5, [3,0,2,6,8,1,7,9,4,2,5,5,0],
      [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
    ],
    [
      1, 4, [0,1,2],
      [[0,1,2,-1]]
    ]
  ]
)('should work %#', (m, n, head, output) => {
  expect(spiralMatrix(m, n, create(head))).toMatchObject(output)
})
