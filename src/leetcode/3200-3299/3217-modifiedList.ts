import { ListNode } from '../utils/linked-list'

/**
 * {@link https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/ | 3217. Delete Nodes From Linked List Present in Array}
 *
 * Topics: Array | Hash Table | Linked List
 */
export function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const set = new Set(nums)
  let node: ListNode | null = new ListNode(0, head)
  const res = node

  while (node) {
    while (node.next && set.has(node.next.val)) {
      node.next = node.next.next
    }
    node = node.next
  }

  return res.next
}
