import { pivotArray, pivotArray2 } from './2161-pivotArray'

it.each(
  //  prettier-ignore
  [
    [
      [9,12,5,10,14,3,10], 10,
      [9,5,3,10,10,12,14]
    ],
    [
      [-3,4,3,2],  2,
      [-3,2,4,3]
    ]
  ]
)('should work %#', (nums, pivot, output) => {
  expect(pivotArray(nums, pivot)).toMatchObject(output)
  expect(pivotArray2(nums, pivot)).toMatchObject(output)
})
