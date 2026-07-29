import { smallestDistancePair } from './0719-smallestDistancePair'

it.each(
  //  prettier-ignore
  [
    [
      [1,3,1], 1,
      0
    ],
    [
      [1,1,1], 2,
      0
    ],
    [
      [1,6,1], 3,
      5
    ],
    [
      [62,100,4], 2,
      58
    ],
    [
      [9,10,7,10,6,1,5,4,9,8], 18,
      2
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(smallestDistancePair(nums, k)).toBe(output)
})
