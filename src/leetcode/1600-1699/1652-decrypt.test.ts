import { decrypt } from './1652-decrypt'

it.each(
  //  prettier-ignore
  [
    [
      [5,7,1,4], 3,
      [12,10,16,13]
    ],
    [
      [1,2,3,4], 0,
      [0,0,0,0]
    ],
    [
      [2,4,9,3], -2,
      [12,5,6,13]
    ],
    [
      [10,5,7,7,3,2,10,3,6,9,1,6], -4,
      [22,26,22,28,29,22,19,22,18,21,28,19]
    ]
  ]
)('should work %#', (code, k, output) => {
  expect(decrypt(code, k)).toMatchObject(output)
})
