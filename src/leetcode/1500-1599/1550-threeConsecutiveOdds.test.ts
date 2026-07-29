import {
  threeConsecutiveOdds,
  threeConsecutiveOdds2,
  threeConsecutiveOdds3,
} from './1550-threeConsecutiveOdds'

it.each(
  //  prettier-ignore
  [
    [
      [2,6,4,1],
      false
    ],
    [
      [1,2,34,3,4,5,7,23,12],
      true
    ],
  ]
)('should work %#', (input, output) => {
  expect(threeConsecutiveOdds(input)).toBe(output)
  expect(threeConsecutiveOdds2(input)).toBe(output)
  expect(threeConsecutiveOdds3(input)).toBe(output)
})
