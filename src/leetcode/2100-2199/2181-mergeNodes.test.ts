import { create, toArray } from '../utils/linked-list'
import { mergeNodes } from './2181-mergeNodes'

it.each(
  //  prettier-ignore
  [
    [
      create([0, 3, 1, 0, 4, 5, 2, 0]),
      [4, 11]
    ],
    [
      create([0,1,0,3,0,2,2,0]),
      [1,3,4]
    ],
  ]
)('should work %#', (input, output) => {
  expect(toArray(mergeNodes(input))).toMatchObject(output)
})
