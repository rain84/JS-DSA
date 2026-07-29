import { minOperations } from './1769-minOperations'

it.each(
  //  prettier-ignore
  [
    [
      "110",
      [1,1,3]
    ],
    [
      "001011",
      [11,8,5,4,3,4]
    ]
  ]
)('should work %#', (input, output) => {
  expect(minOperations(input)).toMatchObject(output)
})
