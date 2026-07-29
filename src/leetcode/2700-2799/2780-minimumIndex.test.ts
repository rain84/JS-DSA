import { minimumIndex, minimumIndex2 } from './2780-minimumIndex'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,2,2],
      2
    ],
    [
      [2,1,3,1,1,1,7,1,2,1],
      4
    ],
    [
      [3,3,3,3,7,2,2],
      -1
    ]
  ]
)('should work %#', (input, output) => {
  expect(minimumIndex(input)).toBe(output)
  expect(minimumIndex2(input)).toBe(output)
})
