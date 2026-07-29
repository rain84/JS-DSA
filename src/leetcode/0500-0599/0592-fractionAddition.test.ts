import { fractionAddition } from './0592-fractionAddition'

it.each(
  //  prettier-ignore
  [
    [
      "-1/2+1/2",
      "0/1"
    ],
    [
      "-1/2+1/2+1/3",
      "1/3"
    ],
    [
      "1/3-1/2",
      "-1/6"
    ],
    [
      "-1/2+1/2",
      "0/1"
    ],
    [
      "7/2+2/3-3/4",
      "41/12"
    ],
    [
      "-1/4-4/5-1/4",
      "-13/10"
    ]
  ]
)('should work %#', (input, output) => {
  expect(fractionAddition(input)).toBe(output)
})
