import { sortColors } from './0075-sortColors'

it('should work 1', () => {
  const arr = [2, 0, 2, 1, 1, 0]
  sortColors(arr)
  expect(arr).toMatchObject([0, 0, 1, 1, 2, 2])
})

it('should work 2', () => {
  const arr = [2, 0, 1]
  sortColors(arr)
  expect(arr).toMatchObject([0, 1, 2])
})

it('should work 3', () => {
  const arr = [1, 2, 0]
  sortColors(arr)
  expect(arr).toMatchObject([0, 1, 2])
})
