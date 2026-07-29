import { minimumPushes, minimumPushes2, minimumPushes3 } from './3016-minimumPushes'

it.each(
  //  prettier-ignore
  [
    [
      "abcde",
      5
    ],
    [
      "xyzxyzxyzxyz",
      12
    ],
    [
      "aabbccddeeffgghhiiiiii",
      24
    ]
  ]
)('should work %#', (input, output) => {
  expect(minimumPushes(input)).toBe(output)
  expect(minimumPushes2(input)).toBe(output)
  expect(minimumPushes3(input)).toBe(output)
})
