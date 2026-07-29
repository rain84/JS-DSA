import { countMaxOrSubsets } from './2044-countMaxOrSubsets'

it.each(
  //  prettier-ignore
  [
    [
      [3,1],
      2
    ],
    [
      [2,2,2],
      7
    ],
    [
      [3,2,1,5],
      6
    ]
  ]
)('should work %#', (input, output) => {
  expect(countMaxOrSubsets(input)).toBe(output)
})
