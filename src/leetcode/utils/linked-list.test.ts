import { ListNode, create, toArray } from './linked-list'

it('ListNode should work', () => {
  const node = new ListNode(1, new ListNode(2))

  expect(node.val).toBe(1)
  expect(node.next!.val).toBe(2)
  expect(node.next!.next).toBeNull()
})

it('create should work', () => {
  const node = create([1, 3])

  expect(node.val).toBe(1)
  expect(node.next!.val).toBe(3)
  expect(node.next!.next).toBeNull()
})

it('toArray should work', () => {
  const arr = toArray(create([1, 2, 3]))

  expect(arr).toMatchObject([1, 2, 3])
})
