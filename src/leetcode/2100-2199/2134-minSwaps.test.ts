import { minSwaps, minSwaps2, minSwaps3 } from './2134-minSwaps'

it.each(
  //  prettier-ignore
  [
    [
      [0,1,0,1,1,0,0],
      1
    ],
    [
      [0,1,1,1,0,0,1,1,0],
      2
    ],
    [ [1],
      0
    ],
    [
      [1,1,0,0,1],
      0
    ],
    [

      [1],
      0
    ],
    [
      [1, 0, 1, 0, 0, 1],
      1
    ]
  ]
)('should work %#', (input, output) => {
  expect(minSwaps(input)).toBe(output)
  expect(minSwaps2(input)).toBe(output)
  expect(minSwaps3(input)).toBe(output)
})
