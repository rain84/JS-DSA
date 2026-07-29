import { longestNiceSubarray } from './2401-longestNiceSubarray'

it.each(
  //  prettier-ignore
  [
    [
      [1,3,8,48,10],
      3
    ],
    [
      [3,1,5,11,13],
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(longestNiceSubarray(input)).toBe(output)
})
