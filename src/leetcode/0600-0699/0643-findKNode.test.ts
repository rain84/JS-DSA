import { create } from '../utils/linked-list'
import { findKNode } from './0643-findKNode'

it('should work 1', () => {
  const data = [1, 2, 3, 4, 5]
  const list = create(data)
  expect(findKNode(list, 2)?.val).toBe(4)
})
