import { maxNumberOfApples } from './1196-maxNumberOfApples'

it.each(
  //  prettier-ignore
  [
    [
      [100,200,150,1000],
      4
    ],
    [
      [900,950,800,1000,700,800],
      5
    ],
  ]
)('should work %#', (input, output) => {
  expect(maxNumberOfApples(input)).toBe(output)
})
