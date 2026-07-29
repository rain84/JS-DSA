import type { ListNode } from '../utils/tree'

/**
 * 141. Linked List Cycle
 * {@link https://leetcode.com/problems/linked-list-cycle/ | Link}
 *
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false

  let fast: ListNode | null = head
  let slow: ListNode | null = head

  while (fast) {
    fast = fast.next?.next ?? null
    slow = slow?.next ?? null

    if (fast && fast === slow) return true
  }

  return false
}
