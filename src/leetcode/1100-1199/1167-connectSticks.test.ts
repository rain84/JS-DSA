import { connectSticks } from './1167-connectSticks'

it('should work 1', () => {
  expect(connectSticks([2, 4, 3])).toBe(14)
})

it('should work 2', () => {
  expect(connectSticks([1, 8, 3, 5])).toBe(30)
})

it('should work 3', () => {
  expect(connectSticks([5])).toBe(0)
})
