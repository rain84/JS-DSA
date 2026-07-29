import { sortJumbled } from './2191-sortJumbled'

it.each(
  //  prettier-ignore
  [
    [
      [8,9,4,0,2,1,3,5,7,6], [991,338,38],
      [338,38,991]
    ],
    [
      [0,1,2,3,4,5,6,7,8,9], [789,456,123],
      [123,456,789]
    ],
    [
      [9,8,7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7,8,9],
      [9,8,7,6,5,4,3,2,1,0]
    ]
  ]
)('should work %#', (mapping, nums, output) => {
  expect(sortJumbled(mapping, nums)).toMatchObject(output)
})
