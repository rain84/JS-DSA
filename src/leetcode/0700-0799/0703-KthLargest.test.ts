import { KthLargest } from './0703-KthLargest'

it('should work 1', () => {
  const instance = new KthLargest(3, [4, 5, 8, 2])
  expect(instance.add(3)).toBe(4)
  expect(instance.add(5)).toBe(5)
  expect(instance.add(10)).toBe(5)
  expect(instance.add(9)).toBe(8)
  expect(instance.add(4)).toBe(8)
})
