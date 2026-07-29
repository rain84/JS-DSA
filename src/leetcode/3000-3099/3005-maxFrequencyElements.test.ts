import { maxFrequencyElements } from './3005-maxFrequencyElements'

it('should work 1', () => {
  expect(maxFrequencyElements([1, 2, 2, 3, 1, 4])).toBe(4)
})

it('should work 2', () => {
  expect(maxFrequencyElements([1, 2, 3, 4, 5])).toBe(5)
})

it('should work 3', () => {
  expect(maxFrequencyElements([10, 12, 11, 9, 6, 19, 11])).toBe(2)
})
