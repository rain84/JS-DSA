import { maxKelements, maxKelements2 } from './2530-maxKelements'

it.each(
  //  prettier-ignore
  [
    [
      [10,10,10,10,10], 5,
      50
    ],
    [
      [1,10,3,3,3], 3,
      17
    ]
  ]
)('should work %#', (nums, k, output) => {
  expect(maxKelements(nums, k)).toBe(output)
  expect(maxKelements2(nums, k)).toBe(output)
})
