import { createTree } from '../utils/tree'
import { getDirections, getDirections2 } from './2096-getDirections'

it.each(
  //  prettier-ignore
  [
    [

      createTree([5,1,2,3,null,6,4]), 3, 6,
      "UURL"
    ],
    [
      createTree([2, 1, null]), 2, 1,
      "L"
    ],
    [
      createTree([1, 2]), 2, 1,
      "U"
    ],
  ]
)('should work %#', (root, startValue, destValue, output) => {
  expect(getDirections(root, startValue, destValue)).toBe(output)
  expect(getDirections2(root, startValue, destValue)).toBe(output)
})
