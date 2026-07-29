import { NumArray } from './0303-NumArray'

it('should work 1', () => {
  const instance = new NumArray([-2, 0, 3, -5, 2, -1])
  expect(instance.sumRange(0, 2)).toBe(1)
  expect(instance.sumRange(2, 5)).toBe(-1)
  expect(instance.sumRange(0, 5)).toBe(-3)
})
