import { longestDiverseString } from './1405-longestDiverseString'

it.each(
  //  prettier-ignore
  [
    [
      1, 1, 7,
      "ccaccbcc"
    ],
    [
      7, 1, 0,
      "aabaa"
    ],
    [
      0, 8, 11,
      "ccbccbbccbbccbbccbc"
    ]
  ]
)('should work %#', (a, b, c, output) => {
  expect(longestDiverseString(a, b, c)).toBe(output)
})
