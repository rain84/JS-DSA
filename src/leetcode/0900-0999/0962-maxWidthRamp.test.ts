import { maxWidthRamp, maxWidthRamp2, maxWidthRamp3, maxWidthRamp4 } from './0962-maxWidthRamp'

it.each(
  //  prettier-ignore
  [
    [
      [6,0,8,2,1,5],
      4
    ],
    [
      [9,8,1,0,1,9,4,0,4,1],
      7
    ]
  ]
)('should work %#', (input, output) => {
  expect(maxWidthRamp(input)).toBe(output)
  expect(maxWidthRamp2(input)).toBe(output)
  expect(maxWidthRamp3(input)).toBe(output)
  expect(maxWidthRamp4(input)).toBe(output)
})
