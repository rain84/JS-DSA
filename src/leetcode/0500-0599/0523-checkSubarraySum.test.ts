import { checkSubarraySum } from './0523-checkSubarraySum'

it('should work 1', () => {
  expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBeTruthy()
})

it('should work 2', () => {
  expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBeTruthy()
})

it('should work 3', () => {
  expect(checkSubarraySum([5, 0, 0, 0], 3)).toBeTruthy()
})

it('should work 4', () => {
  expect(checkSubarraySum([2, 4, 3], 6)).toBeTruthy()
})

it('should work 5', () => {
  expect(checkSubarraySum([0], 1)).toBeFalsy()
})

it('should work 6', () => {
  expect(checkSubarraySum([1, 0], 2)).toBeFalsy()
})
