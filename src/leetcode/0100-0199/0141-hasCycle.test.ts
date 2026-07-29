import { ListNode, create } from '../utils/linked-list'
import { hasCycle } from './0141-hasCycle'

it('should work 1', () => {
  const last = new ListNode(-4)
  const list = new ListNode(3, new ListNode(2, new ListNode(0, last)))
  last.next = list.next

  expect(hasCycle(list)).toBeTruthy()
})

it('should work 2', () => {
  const last = new ListNode(2)
  const list = new ListNode(1, last)
  last.next = list

  expect(hasCycle(list)).toBeTruthy()
})

it('should work 3', () => {
  expect(hasCycle(new ListNode(1))).toBeFalsy()
})

it('should work 4', () => {
  const data = [
    -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14, 14, 2, 13, -24,
    21, 23, -21, 5,
  ]

  expect(hasCycle(create(data))).toBeFalsy()
})

it('should work 5', () => {
  expect(hasCycle(create([]))).toBeFalsy()
})
