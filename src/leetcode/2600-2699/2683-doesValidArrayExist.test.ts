import { doesValidArrayExist, doesValidArrayExist2 } from './2683-doesValidArrayExist'

it.each(
  //  prettier-ignore
  [
    [
      [1,1,0],
      true
    ],
    [
      [1,1],
      true
    ],
    [
      [1,0],
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(doesValidArrayExist(input)).toBe(output)
  expect(doesValidArrayExist2(input)).toBe(output)
})
