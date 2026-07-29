import { canArrange } from './1497-canArrange'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,5,10,6,7,8,9], 5,
      true
    ],
    [
      [1,2,3,4,5,6], 7,
      true
    ],
    [
      [1,2,3,4,5,6], 10,
      false
    ],
    [
      [-4,-7,5,2,9,1,10,4,-8,-3], 3,
      true
    ],
    [
      [75,5,-5,75,-2,-3,88,10,10,87], 85,
      true
    ],
    [
      [-1,1,-2,2,-3,3,-4,4],3,
      true
    ],
    [
      [-1,-1,-1,-1,2,2,-2,-2], 3,
      false
    ]
  ]
)('should work %#', (arr, k, output) => {
  expect(canArrange(arr, k)).toBe(output)
})
