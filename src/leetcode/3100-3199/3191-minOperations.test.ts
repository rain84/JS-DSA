import { minOperations } from './3191-minOperations'

it.each(
  //  prettier-ignore
  [
    [
      [0,1,1,1,0,0],
      3
    ],
    [
      [0,1,1,1],
      -1
    ]
  ]
)('should work %#', (input, output) => {
  expect(minOperations(input)).toBe(output)
})
