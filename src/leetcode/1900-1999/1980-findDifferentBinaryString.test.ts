import { findDifferentBinaryString } from './1980-findDifferentBinaryString'

it.each(
  //  prettier-ignore
  [
    [
      ["01","10"],
      "00"
    ],
    [
      ["00","01"],
      "10"
    ],
    [
      ["111","011","001"],
      "000"
    ]
  ]
)('should work %#', (input, output) => {
  expect(findDifferentBinaryString(input)).toBe(output)
})
