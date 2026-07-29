import { minimumCost } from './2976-minimumCost'

it.each(
  //  prettier-ignore
  [
    [
      "abcd", "acbe", ["a","b","c","c","e","d"], ["b","c","b","e","b","e"], [2,5,5,1,2,20],
      28
    ],
    [
      "aaaa", "bbbb", ["a","c"], ["c","b"], [1,2],
      12
    ],
    [
      "abcd", "abce", ["a"], ["e"], [10000],
      -1
    ]
  ]
)('should work %#', (source, target, original, changed, cost, output) => {
  expect(minimumCost(source, target, original, changed, cost)).toBe(output)
})
