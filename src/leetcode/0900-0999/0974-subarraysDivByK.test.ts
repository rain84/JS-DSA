import { subarraysDivByK } from './0974-subarraysDivByK'

it('should work 1', () => {
  expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7)
})

it('should work 2', () => {
  expect(subarraysDivByK([5], 9)).toBe(0)
})

it('should work 3', () => {
  expect(subarraysDivByK([-1, 2, 9], 2)).toBe(2)
})

it('should work 4', () => {
  expect(subarraysDivByK([2, -2, 2, -4], 6)).toBe(2)
})
