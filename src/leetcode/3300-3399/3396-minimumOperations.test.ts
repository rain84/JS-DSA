import { minimumOperations, minimumOperations2 } from './3396-minimumOperations'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,4,2,3,3,5,7],
      2
    ],
    [
      [4,5,6,4,4],
      2
    ]
  ]
)('should work %#', (input, output) => {
  expect(minimumOperations(input)).toBe(output)
  expect(minimumOperations2(input)).toBe(output)
})
