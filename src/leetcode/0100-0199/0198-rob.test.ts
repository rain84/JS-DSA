import { rob, rob2 } from './0198-rob'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,3,1],
      4
    ],
    [
      [2,7,9,3,1],
      12
    ],
    [
      [2,1],
      2
    ]
  ]
)('should work %#', (input, output) => {
  expect(rob(input)).toBe(output)
  expect(rob2(input)).toBe(output)
})
