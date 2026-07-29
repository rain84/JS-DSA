import { maxAscendingSum } from './1800-maxAscendingSum'

it.each(
  //  prettier-ignore
  [
    [
      [10,20,30,5,10,50],
      65
    ],
    [
      [10,20,30,40,50],
      150
    ],
    [
      [12,17,15,13,10,11,12],
      33
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxAscendingSum(input)).toBe(output)
})
