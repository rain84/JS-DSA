import { relativeSortArray } from './1122-relativeSortArray'

it('should work 1', () => {
  const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
  const arr2 = [2, 1, 4, 3, 9, 6]
  const output = [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  expect(relativeSortArray(arr1, arr2)).toMatchObject(output)
})

it('should work 2', () => {
  const arr1 = [28, 6, 22, 8, 44, 17]
  const arr2 = [22, 28, 8, 6]
  const output = [22, 28, 8, 6, 17, 44]
  expect(relativeSortArray(arr1, arr2)).toMatchObject(output)
})
