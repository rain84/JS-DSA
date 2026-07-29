import { minStartValue } from './1413-minStartValue'

it('should work 1', () => {
  expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5)
})

it('should work 2', () => {
  expect(minStartValue([1, 2])).toBe(1)
})

it('should work 3', () => {
  expect(minStartValue([1, -2, -3])).toBe(5)
})
