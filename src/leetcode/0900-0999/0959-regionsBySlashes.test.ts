import { regionsBySlashes } from './0959-regionsBySlashes'

it.each(
  //  prettier-ignore
  [
    [
      [" /","/ "],
      2
    ],
    [
      [" /","  "],
      1
    ],
    [
      ["/\\","\\/"],
      5
    ],
    [
      ["//","/ "],
      3
    ],
    [
      ["\\/\\ "," /\\/"," \\/ ","/ / "],
      3
    ]
  ]
)('should work %#', (input, output) => {
  expect(regionsBySlashes(input)).toBe(output)
})
