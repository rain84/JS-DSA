import { getLucky } from './1495-getLucky'

it.each(
  //  prettier-ignore
  [
    [
      "iiii", 1,
      36
    ],
    [
      "leetcode", 2,
      6
    ],
    [
      "zbax", 2,
      8
    ]
  ]
)('should work %#', (s, k, output) => {
  expect(getLucky(s, k)).toBe(output)
})
