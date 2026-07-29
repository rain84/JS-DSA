import { maximumGain, maximumGain2, maximumGain3 } from './1717-maximumGain'

it.each(
  //  prettier-ignore
  [
    [
      "cdbcbbaaabab", 4, 5,
      19
    ],
    [
      "aabbaaxybbaabb", 5, 4,
      20
    ]
  ]
)('should work %#', (s, x, y, output) => {
  expect(maximumGain(s, x, y)).toBe(output)
  expect(maximumGain2(s, x, y)).toBe(output)
  expect(maximumGain3(s, x, y)).toBe(output)
})
