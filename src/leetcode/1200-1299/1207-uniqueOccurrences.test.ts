import { uniqueOccurrences } from './1207-uniqueOccurrences'

it('should work 1', () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBeTruthy()
})

it('should work 2', () => {
  expect(uniqueOccurrences([1, 2])).toBeFalsy()
})

it('should work 3', () => {
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBeTruthy()
})
