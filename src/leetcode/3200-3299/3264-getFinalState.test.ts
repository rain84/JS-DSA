import { getFinalState, getFinalState2 } from './3264-getFinalState'

it.each(
  //  prettier-ignore
  [
    [
      [2,1,3,5,6], 5, 2,
      [8,4,6,5,6]
    ],
    [
      [1,2], 3, 4,
      [16,8]
    ],
    [
      [2,2], 1, 5,
      [10,2]
    ]
  ]
)('should work %#', (nums, k, multiplier, output) => {
  expect(getFinalState([...nums], k, multiplier)).toMatchObject(output)
  expect(getFinalState2(nums, k, multiplier)).toMatchObject(output)
})
