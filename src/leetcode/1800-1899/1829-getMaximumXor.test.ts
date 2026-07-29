import { getMaximumXor } from './1829-getMaximumXor'

it.each(
  //  prettier-ignore
  [
    [
      [0,1,1,3], 2,
      [0,3,2,3]
    ],
    [
      [2,3,4,7], 3,
      [5,2,6,5]
    ],
    [
      [0,1,2,2,5,7], 3,
      [4,3,6,4,6,7]
    ]
  ]
)('should work %#', (nums, maximumBit, output) => {
  expect(getMaximumXor(nums, maximumBit)).toMatchObject(output)
})
