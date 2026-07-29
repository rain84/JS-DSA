import { checkPowersOfThree } from './1780-checkPowersOfThree'

it.each(
  //  prettier-ignore
  [
    [
      12,
      true
    ],
    [
      91,
      true
    ],
    [
      21,
      false
    ]
  ]
)('should work %#', (input, output) => {
  expect(checkPowersOfThree(input)).toBe(output)
})
