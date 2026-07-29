import { waysToSplitArray } from './2270-waysToSplitArray'

it.each(
  //  prettier-ignore
  [
    [
      [10,4,-8,7],
      2
    ],
    [
      [2,3,1,0],
      2
    ]
  ]
)('should work %#', (input, output) => {
  expect(waysToSplitArray(input)).toBe(output)
})
