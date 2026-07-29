import { resultsArray } from './3254-resultsArray'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,3,2,5], 3,
      [3,4,-1,-1,-1]
    ],
    [
      [2,2,2,2,2], 4,
      [-1,-1]
    ],
    [
      [3,2,3,2,3,2], 2,
      [-1,3,-1,3,-1]
    ],
    [
      [9,2], 1,
      [9,2]
    ],
    [
      [1,3,4],2,
      [-1,4]
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(resultsArray(nums, k)).toMatchObject(output)
})
