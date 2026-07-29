import { tupleSameProduct } from './1726-tupleSameProduct'

it.each(
  //  prettier-ignore
  [
    [
      [2,3,4,6],
      8
    ],
    [
      [1,2,4,5,10],
      16
    ]
  ]
)('should work %#', (input, output) => {
  expect(tupleSameProduct(input)).toBe(output)
})
