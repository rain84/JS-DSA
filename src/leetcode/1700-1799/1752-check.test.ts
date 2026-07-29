import { check } from './1752-check'

it.each(
  //  prettier-ignore
  [
    [
      [3,4,5,1,2],
      true
    ],
    [
      [2,1,3,4],
      false
    ],
    [
      [1,2,3],
      true
    ]
  ]
)('should work %#', (input, output) => {
  expect(check(input)).toBe(output)
})
