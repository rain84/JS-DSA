import { containsDuplicate } from './0217-containsDuplicate'

it('should work 1', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy()
})

it('should work 2', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy()
})

it('should work 3', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy()
})
