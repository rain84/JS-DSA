import {
  makeFancyString,
  makeFancyString2,
  makeFancyString3,
  makeFancyString4,
  makeFancyString5,
} from './1957-makeFancyString'

it.each(
  //  prettier-ignore
  [
    [
      "aaabaaaa",
      "aabaa"
    ],
    [
      "aab",
      "aab"
    ]
  ]
)('should work %#', (input, output) => {
  expect(makeFancyString(input)).toBe(output)
  expect(makeFancyString2(input)).toBe(output)
  expect(makeFancyString3(input)).toBe(output)
  expect(makeFancyString4(input)).toBe(output)
  expect(makeFancyString5(input)).toBe(output)
})
