import { continuousSubarrays } from './2762-continuousSubarrays'

it.each(
  //  prettier-ignore
  [
    [
      [5,4,2,4],
      8
    ],
    [
      [1,2,3],
      6
    ]
  ]
)('should work %#', (input, output) => {
  expect(continuousSubarrays(input)).toBe(output)
})
