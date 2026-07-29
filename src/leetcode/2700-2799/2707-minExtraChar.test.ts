import { minExtraChar } from './2707-minExtraChar'

it.each(
  //  prettier-ignore
  [
    [
      "leetscode", ["leet","code","leetcode"],
      1
    ],
    [
      "sayhelloworld", ["hello","world"],
      3
    ],
    [
      "dwmodizxvvbosxxw", ["ox","lb","diz","gu","v","ksv","o","nuq","r","txhe","e","wmo","cehy","tskz","ds","kzbu"],
      7
    ]
  ]
)('should work %#', (s, dictionary, output) => {
  expect(minExtraChar(s, dictionary)).toBe(output)
})
