import { maxAbsoluteSum } from './1749-maxAbsoluteSum'

it.each(
  //  prettier-ignore
  [
    [
      [1,-3,2,3,-4],
      5
    ],
    [
      [2,-5,1,-4,3,-2],
      8
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxAbsoluteSum(input)).toBe(output)
})
