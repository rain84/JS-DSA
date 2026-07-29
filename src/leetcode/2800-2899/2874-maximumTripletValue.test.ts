import { maximumTripletValue } from './2874-maximumTripletValue'

it.each(
  //  prettier-ignore
  [
    [
      [12,6,1,2,7],
      77
    ],
    [
      [1,10,3,4,19],
      133
    ],
    [
      [1,2,3],
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(maximumTripletValue(input)).toBe(output)
})
