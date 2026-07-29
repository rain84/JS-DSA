import { pickGifts } from './2558-pickGifts'

it.each(
  //  prettier-ignore
  [
    [
      [25,64,9,4,100], 4,
      29
    ],
    [
      [1,1,1,1], 4,
      4
    ]
  ]
)('should work %#', (gifts, k, output) => {
  expect(pickGifts(gifts, k)).toBe(output)
})
