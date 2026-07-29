import { minSetSize } from './1338-minSetSize'

it.each(
  //  prettier-ignore
  [
    [
      [3, 3, 3, 3, 5, 5, 5, 2, 2, 7],
      2
    ],
    [
      [7,7,7,7,7,7],
      1
    ],
    [
      [1,9],
      1
    ],
  ]
)('should work %#', (input, output) => {
  expect(minSetSize(input)).toBe(output)
})
