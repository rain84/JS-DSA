import { kthDistinct, kthDistinct2 } from './2053-kthDistinct'

it.each(
  //  prettier-ignore
  [
    [
      ["d","b","c","b","c","a"], 2,
      "a"
    ],
    [
      ["aaa","aa","a"], 1,
      "aaa"
    ],
    [
      ["a","b","a"], 3,
      ""
    ]
  ]
)('should work %#', (arr, k, output) => {
  expect(kthDistinct(arr, k)).toBe(output)
  expect(kthDistinct2(arr, k)).toBe(output)
})
