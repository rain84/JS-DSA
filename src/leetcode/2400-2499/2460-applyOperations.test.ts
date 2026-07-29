import { applyOperations, applyOperations2 } from './2460-applyOperations'

it.each(
  //  prettier-ignore
  [
    [
      [1,2,2,1,1,0],
      [1,4,2,0,0,0]
    ],
    [
      [0,1],
      [1,0]
    ],
    [
      [847,847,0,0,0,399,416,416,879,879,206,206,206,272],
      [1694,399,832,1758,412,206,272,0,0,0,0,0,0,0]
    ]
  ]
)('should work %#', (input, output) => {
  expect(applyOperations(input)).toMatchObject(output)
  expect(applyOperations2(input)).toMatchObject(output)
})
