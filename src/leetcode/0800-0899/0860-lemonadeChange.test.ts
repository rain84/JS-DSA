import { lemonadeChange, lemonadeChange2 } from './0860-lemonadeChange'

it.each(
  //  prettier-ignore
  [
    [
      [5,5,5,10,20],
      true
    ],
    [
      [5,5,10,10,20],
      false
    ],
    [
      [10,10],
      false
    ],
    [
      [5,5,10,10,5,20,5,10,5,5],
      true
    ],
    [
      [5,5,5,20],
      true
    ]
  ]
)('should work %#', (input, output) => {
  expect(lemonadeChange(input)).toBe(output)
  expect(lemonadeChange2(input)).toBe(output)
})
