import { create, toArray } from '../utils/linked-list'
import { modifiedList } from './3217-modifiedList'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3], [1,2,3,4,5],
      [4,5]
    ],
    [
      [1], [1,2,1,2,1,2],
      [2,2,2]
    ],
    [
      [5], [1,2,3,4],
      [1,2,3,4]
    ]
  ]
)('should work %#', (nums, head, output) => {
  expect(toArray(modifiedList(nums, create(head)))).toMatchObject(output)
})
