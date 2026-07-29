import type { ListNode } from '../utils/tree'

/**
 * 206. Reverse Linked List
 * {@link https://leetcode.com/problems/reverse-linked-list/submissions/ | Link}
 *
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let node = head
  let prev: ListNode | null = null

  while (node) {
    const next = node.next
    node.next = prev
    prev = node
    node = next
  }

  return prev
}

export function recursivelyReverseList(
  head: ListNode | null,
  prev: ListNode | null = null
): ListNode | null {
  if (!head) return null
  if (!head?.next) {
    head.next = prev
    return head
  }

  const tail = head!.next
  head!.next = prev

  return recursivelyReverseList(tail, head)
}
