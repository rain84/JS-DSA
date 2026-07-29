import { nthUglyNumber } from './0264-nthUglyNumber'

it.each(
  //  prettier-ignore
  [
    [
      10,
      12
    ],
    [
      1,
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(nthUglyNumber(input)).toBe(output)
})
