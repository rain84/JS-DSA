import { checkIfExist } from './1346-checkIfExist'

it.each(
  //  prettier-ignore
  [
    [
      [10,2,5,3],
      true
    ],
    [
      [3,1,7,11],
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(checkIfExist(input)).toBe(output)
})
