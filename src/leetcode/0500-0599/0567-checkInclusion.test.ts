import { checkInclusion } from './0567-checkInclusion'

it.each(
  //  prettier-ignore
  [
    [
      "ab", "eidbaooo",
      true
    ],
    [
      "ab", "eidboaoo",
      false
    ],
    [
      "adc", "dcda",
      true
    ]
  ]
)('should work %#', (s1, s2, output) => {
  expect(checkInclusion(s1, s2)).toBe(output)
})
