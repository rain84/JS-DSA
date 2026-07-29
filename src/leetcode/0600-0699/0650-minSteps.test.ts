import { minSteps } from './0650-minSteps'

it.each(
  //  prettier-ignore
  [
    [
      3,
      3
    ],
    [
      1,
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(minSteps(input)).toBe(output)
})
