import { ListNode } from '../utils/linked-list'

export function mergeNodes(head: ListNode | null): ListNode | null {
  let node = new ListNode(0)
  const res = node
  let sum = 0

  head = head?.next ?? null

  while (head) {
    if (!head.val && sum) {
      node.next = new ListNode(sum)
      node = node.next
      sum = 0
    }

    sum += head.val
    head = head.next
  }

  return res.next
}
