import { minOperations } from './1598-minOperations'

it.each(
  //  prettier-ignore
  [
    [
      ["d1/","d2/","../","d21/","./"],
      2
    ],
    [
      ["d1/","d2/","./","d3/","../","d31/"],
      3
    ],
    [
      ["d1/","../","../","../"],
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(minOperations(input)).toBe(output)
})
