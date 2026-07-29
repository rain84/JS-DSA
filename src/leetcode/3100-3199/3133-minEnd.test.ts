import { minEnd, minEnd2 } from './3133-minEnd'

it.each(
  //  prettier-ignore
  [
    [
      3, 4,
      6
    ],
    [
      2, 7,
      15
    ],
    [
      6715154, 7193485,
      55012476815
    ]
  ]
)('should work %#', (n, x, output) => {
  expect(minEnd(n, x)).toBe(output)
  expect(minEnd2(n, x)).toBe(output)
})
