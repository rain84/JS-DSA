import { twoSum } from './0001-twoSum'

it('should work 1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toMatchObject([0, 1])
})

it('should work 2', () => {
  expect(twoSum([3, 2, 4], 6)).toMatchObject([1, 2])
})

it('should work 3', () => {
  expect(twoSum([3, 3], 6)).toMatchObject([0, 1])
})
