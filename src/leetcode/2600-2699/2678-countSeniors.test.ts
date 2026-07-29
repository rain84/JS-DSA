import { countSeniors } from './2678-countSeniors'

it.each(
  //  prettier-ignore
  [
    [
      ["7868190130M7522","5303914400F9211","9273338290F4010"],
      2
    ],
    [
      ["1313579440F2036","2921522980M5644"],
      0
    ]
  ]
)('should work %#', (input, output) => {
  expect(countSeniors(input)).toBe(output)
})
