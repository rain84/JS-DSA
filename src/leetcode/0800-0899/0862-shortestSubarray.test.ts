import { shortestSubarray } from './0862-shortestSubarray'

it.each(
  //  prettier-ignore
  [
    [
      [1], 1,
      1
    ],
    [
      [1,2], 4,
      -1
    ],
    [
      [2,-1,2], 3,
      3
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(shortestSubarray(nums, k)).toBe(output)
})
