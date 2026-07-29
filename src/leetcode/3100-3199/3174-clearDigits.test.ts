import { clearDigits } from './3174-clearDigits'

it.each(
  //  prettier-ignore
  [
    [
      "abc",
      "abc"
    ],
    [
      "cb34",
      ""
    ]
  ]
)('should work %#', (input, output) => {
  expect(clearDigits(input)).toBe(output)
})
