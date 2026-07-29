import { countSymmetricIntegers } from './2843-countSymmetricIntegers'

it.each(
  //  prettier-ignore
  [
    [
      1, 100,
      9
    ],
    [
      1200, 1230,
      4
    ]
  ]
)('should work %#', (low, high, output) => {
  expect(countSymmetricIntegers(low, high)).toBe(output)
})
