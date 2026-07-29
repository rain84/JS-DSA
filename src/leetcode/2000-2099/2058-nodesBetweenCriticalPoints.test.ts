import { create } from '../utils/linked-list'
import { nodesBetweenCriticalPoints } from './2058-nodesBetweenCriticalPoints'

it.each(
  //  prettier-ignore
  [
    [
      [3, 1], 
      [-1, -1]
    ],
    [
      [5, 3, 1, 2, 5, 1, 2],
      [1, 3]
    ],
    [
      [1, 3, 2, 2, 3, 2, 2, 2, 7],
      [3, 3]
    ],
    [
      [6, 8, 4, 1, 9, 6, 6, 10, 6], 
      [1, 6]     
    ],
    [
      [2, 2, 1, 3],
      [-1, -1]
    ]
  ]
)('should work %#', (input, output) => {
  expect(nodesBetweenCriticalPoints(create(input))).toMatchObject(output)
})
