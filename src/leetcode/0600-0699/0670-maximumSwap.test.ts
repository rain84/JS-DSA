import { maximumSwap, maximumSwap2 } from './0670-maximumSwap'

it.each(
  //  prettier-ignore
  [
    [
      2736,
      7236
    ],
    [
      9973,
      9973
    ],
    [
      1,
      1
    ],
    [
      98368,
      98863
    ]
  ]
)('should work %#', (input, output) => {
  expect(maximumSwap(input)).toBe(output)
  expect(maximumSwap2(input)).toBe(output)
})
