import { minimizedMaximum } from './2064-minimizedMaximum'

it.each(
  //  prettier-ignore
  [
    [
      6, [11,6],
      3
    ],
    [
      7, [15,10,10],
      5
    ],
    [
      1, [100000],
      100000
    ]
  ]
)('should work %#', (n, quantities, output) => {
  expect(minimizedMaximum(n, quantities)).toBe(output)
})
