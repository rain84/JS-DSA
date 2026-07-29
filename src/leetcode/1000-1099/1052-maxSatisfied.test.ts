import { maxSatisfied } from './1052-maxSatisfied'

it('should work 1', () => {
  const customers = [1, 0, 1, 2, 1, 1, 7, 5]
  const grumpy = [0, 1, 0, 1, 0, 1, 0, 1]
  const minutes = 3
  expect(maxSatisfied(customers, grumpy, minutes)).toBe(16)
})

it('should work 2', () => {
  const customers = [1]
  const grumpy = [0]
  const minutes = 1
  expect(maxSatisfied(customers, grumpy, minutes)).toBe(1)
})

it('should work 3', () => {
  const customers = [5, 8]
  const grumpy = [0, 1]
  const minutes = 1
  expect(maxSatisfied(customers, grumpy, minutes)).toBe(13)
})
