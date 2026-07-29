import { getHappyString } from './1415-getHappyString'

it.each(
  //  prettier-ignore
  [
    [
      1, 3,
      "c"
    ],
    [
      1, 4,
      ""
    ],
    [
      3, 9,
      "cab"
    ]
  ]
)('should work %#', (n, k, output) => {
  expect(getHappyString(n, k)).toBe(output)
})
