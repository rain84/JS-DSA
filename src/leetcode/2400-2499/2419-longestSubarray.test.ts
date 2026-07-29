import { longestSubarray } from './2419-longestSubarray'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,3,2,2],
      2
    ],
    [
      [1,2,3,4],
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(longestSubarray(input)).toBe(output)
})
