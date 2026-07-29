import { wordSubsets } from './0916-wordSubsets'

it.each(
  //  prettier-ignore
  [
    [
      ["amazon","apple","facebook","google","leetcode"], ["e","o"],
      ["facebook","google","leetcode"]
    ],
    [
      ["amazon","apple","facebook","google","leetcode"], ["l","e"],
      ["apple","google","leetcode"]
    ]
  ]
)('should work %#', (words1, words2, output) => {
  expect(Str(wordSubsets(words1, words2))).toBe(Str(output))
})

const Str = (arr: string[]) => arr.toSorted((a, b) => a.localeCompare(b)).toString()
