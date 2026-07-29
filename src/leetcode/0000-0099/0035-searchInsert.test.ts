import { searchInsert } from './0035-searchInsert'

it.each(
  //  prettier-ignore
  [
    [
      [1,3,5,6], 5,
      2
    ],
    [
      [1,3,5,6], 2,
      1
    ],
    [
      [1,3,5,6], 7,
      4      
    ],
  ]
)('should work %#', (nums, target, output) => {
  expect(searchInsert(nums, target)).toBe(output)
})

it('should work 1', () => {
  expect(searchInsert([1, 3, 5, 6], 6)).toBe(3)
})
