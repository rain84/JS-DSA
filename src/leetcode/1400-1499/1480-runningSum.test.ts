import { runningSum } from './1480-runningSum'

it('should work 1', () => {
  expect(runningSum([1, 2, 3, 4])).toMatchObject([1, 3, 6, 10])
})

it('should work 2', () => {
  expect(runningSum([1, 1, 1, 1, 1])).toMatchObject([1, 2, 3, 4, 5])
})

it('should work 3', () => {
  expect(runningSum([3, 1, 2, 10, 1])).toMatchObject([3, 4, 6, 16, 17])
})
