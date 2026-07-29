import { smallestDivisor } from './1283-smallestDivisor'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,5,9], 6,
      5
    ],
    [
      [44,22,33,11,1], 5,
      44
    ]
  ]
)('should work %#', (nums, threshold, output) => {
  expect(smallestDivisor(nums, threshold)).toBe(output)
})
