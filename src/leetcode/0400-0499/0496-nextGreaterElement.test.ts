import { nextGreaterElement } from './0496-nextGreaterElement'

it('should work 1', () => {
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toMatchObject([-1, 3, -1])
})

it('should work 2', () => {
  expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toMatchObject([3, -1])
})
