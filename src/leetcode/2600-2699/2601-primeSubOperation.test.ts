import {primeSubOperation} from './2601-primeSubOperation'

it.each(
  //  prettier-ignore
  [
    [
      [4,9,6,10],
      true
    ],
    [
      [6,8,11,12],
      true
    ],
    [
      [5,8,3],
      false
    ],
    [
      [998,2],
      true
    ],
    [
      [18,12,14,6],
      false
    ],
    [
      [4,3,7,4],
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(primeSubOperation(input)).toBe(output)
})
