import { countConsistentStrings } from './1684-countConsistentStrings'

it.each(
  //  prettier-ignore
  [
    [
      "ab", ["ad","bd","aaab","baa","badab"],
      2
    ],
    [
      "abc", ["a","b","c","ab","ac","bc","abc"],
      7
    ],
    [
      "cad", ["cc","acd","b","ba","bac","bad","ac","d"],
      4
    ]
  ]
)('should work %#', (allowed, words, output) => {
  expect(countConsistentStrings(allowed, words)).toBe(output)
})
