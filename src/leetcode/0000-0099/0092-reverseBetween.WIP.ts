import type { ListNode } from '../utils/tree'

/**
 * 92. Reverse Linked List II
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/704/linked-lists/4598/ | Link}
 *
 * TODO: add handling for the boundary inputs
 *
 */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let node = head
  let reversed: ListNode | null = null
  let listLeft: ListNode | null = null
  let reverseLast: ListNode | null = null
  let c = 1

  while (node && c <= right) {
    const next = node.next

    if (c === left - 1) listLeft = node
    if (c >= left) {
      node.next = reversed
      reversed = node
      if (c === left) reverseLast = reversed
    }

    node = next
    c++
  }

  listLeft!.next = reversed
  reverseLast!.next = node

  return head
}
