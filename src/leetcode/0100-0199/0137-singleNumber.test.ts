import { singleNumber, singleNumber2 } from './0137-singleNumber'

it.each(
  //  prettier-ignore
  [
    [
      [2,2,3,2],
      3
    ],
    [
      [0,1,0,1,0,1,99],
      99
    ],
  ]
)('should work %#', (input, output) => {
  expect(singleNumber(input)).toBe(output)
  expect(singleNumber2(input)).toBe(output)
})
