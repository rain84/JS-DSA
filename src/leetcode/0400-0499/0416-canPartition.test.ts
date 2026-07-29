import { canPartition } from './416-canPartition'

it.each(
  //  prettier-ignore
  [
    [
      [1,5,11,5],
      true
    ],
    [
      [1,2,3,5],
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(canPartition(input)).toBe(output)
})
