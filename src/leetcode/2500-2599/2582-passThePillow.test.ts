import { passThePillow } from './2582-passThePillow'

it.each(
  //  prettier-ignore
  [
    [
      4, 5,
      2
    ],
    [
      3, 2,
      3
    ],
    [
      8, 9,
      6
    ],
    [
      9, 4,
      5
    ]
  ]
)('should work %#', (n, time, output) => {
  expect(passThePillow(n, time)).toBe(output)
})
