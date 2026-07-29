import { addSpaces } from './2109-addSpaces'

it.each(
  //  prettier-ignore
  [
    [
      "LeetcodeHelpsMeLearn", [8,13,15],
      "Leetcode Helps Me Learn"
    ],
    [
      "icodeinpython", [1,5,7,9],
      "i code in py thon"
    ],
    [
      "spacing", [0,1,2,3,4,5,6],
      " s p a c i n g"
    ]
  ]
)('should work %#', (s, spaces, output) => {
  expect(addSpaces(s, spaces)).toBe(output)
})
