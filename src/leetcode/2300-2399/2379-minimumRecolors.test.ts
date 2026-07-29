import { minimumRecolors } from './2379-minimumRecolors'

it.each(
  //  prettier-ignore
  [
    [
      "WBBWWBBWBW", 7,
        3
    ],
    [
      "WBWBBBW", 2,
      0
    ],
    [
      "WWBBBWBBBBBWWBWWWB", 16,
      6
    ]
  ]
)('should work %#', (blocks, k, output) => {
  expect(minimumRecolors(blocks, k)).toBe(output)
})
