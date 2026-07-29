import { minSubArrayLen } from './0209-minSubArrayLen'

it('should work 1', () => {
  expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
})

it('should work 2', () => {
  expect(minSubArrayLen(4, [1, 4, 4])).toBe(1)
})

it('should work 3', () => {
  expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0)
})
