import { longestMonotonicSubarray } from './3105-longestMonotonicSubarray'

it.each(
  //  prettier-ignore
  [
    [
      [1,4,3,3,2],
      2
    ],
    [
      [3,3,3,3],
      1
    ],
    [
      [3,2,1],
      3
    ]
  ]
)('should work %#', (input, output) => {
  expect(longestMonotonicSubarray(input)).toBe(output)
})
