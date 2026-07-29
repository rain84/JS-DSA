import { areAlmostEqual } from './1790-areAlmostEqual'

it.each(
  //  prettier-ignore
  [
    [
      "bank", "kanb",
      true
    ],
    [
      "attack", "defend",
      false
    ],
    [
      "kelb", "kelb",
      true
    ],
    [
      "caa", "aaz",
      false
    ]
  ]
)('should work %#', (s1, s2, output) => {
  expect(areAlmostEqual(s1, s2)).toBe(output)
})
