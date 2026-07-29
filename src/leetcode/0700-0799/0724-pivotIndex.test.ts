import { pivotIndex } from './0724-pivotIndex'

it('should work 1', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
})

it('should work 2', () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1)
})

it('should work 3', () => {
  expect(pivotIndex([2, 1, -1])).toBe(0)
})

it('should work 4', () => {
  expect(pivotIndex([-1, -1, 0, 1, 1, -1])).toBe(0)
})

it('should work 5', () => {
  expect(pivotIndex([-1, -1, 0, 1, 1, 0])).toBe(5)
})
