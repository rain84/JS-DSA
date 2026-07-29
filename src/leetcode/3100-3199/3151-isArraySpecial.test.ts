import { isArraySpecial, isArraySpecial2 } from './3151-isArraySpecial'

it.each(
  //  prettier-ignore
  [
    [
      [1],
      true
    ],
    [
      [2,1,4],
      true
    ],
    [
      [4,3,1,6],
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(isArraySpecial(input)).toBe(output)
  expect(isArraySpecial2(input)).toBe(output)
})
