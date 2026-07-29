import { letterCombinations } from './0017-letterCombinations'
import { sort } from './util'

it.each(
  //  prettier-ignore
  [
    [
      '23',
      ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    ],
    [
      '',
      []
    ],
    [
      '2',
      ['a', 'b', 'c']
    ]
  ]
)('should work %#', (input, output) => {
  expect(sort(letterCombinations(input))).toBe(sort(output))
})
