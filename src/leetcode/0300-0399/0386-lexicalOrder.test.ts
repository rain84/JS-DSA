import { lexicalOrder, lexicalOrder2, lexicalOrder3 } from './0386-lexicalOrder'

it.each(
  //  prettier-ignore
  [
    [
      13,
      [1,10,11,12,13,2,3,4,5,6,7,8,9]
    ],
    [
      2,
      [1,2]
    ]
  ]
)('should work %#', (input, output) => {
  expect(lexicalOrder(input)).toMatchObject(output)
  expect(lexicalOrder2(input)).toMatchObject(output)
  expect(lexicalOrder3(input)).toMatchObject(output)
})
