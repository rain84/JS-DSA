import { maxSlidingWindow } from './0239-maxSlidingWindow'

it('should work 1', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toMatchObject([3, 3, 5, 5, 6, 7])
})

it('should work 2', () => {
  expect(maxSlidingWindow([1], 1)).toMatchObject([1])
})

it('should work 3', () => {
  expect(maxSlidingWindow([1, -1], 1)).toMatchObject([1, -1])
})

it('should work 4', () => {
  expect(maxSlidingWindow([1, -1], 1)).toMatchObject([1, -1])
})

it('should work 5', () => {
  expect(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)).toMatchObject([3, 3, 2, 5])
})

it('should work 6', () => {
  expect(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5)).toMatchObject([10, 10, 9, 2])
})

it('should work 7', () => {
  expect(maxSlidingWindow([5, 3, 4], 1)).toMatchObject([5, 3, 4])
})
