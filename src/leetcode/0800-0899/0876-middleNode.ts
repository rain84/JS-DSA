import type { ListNode } from '../utils/tree'

/**
 * 876. Middle of the Linked List
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/704/linked-lists/4660/ | Link}
 *
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head

  while (fast?.next) {
    fast = fast.next?.next ?? null
    slow = slow?.next ?? null
  }

  return slow
}
