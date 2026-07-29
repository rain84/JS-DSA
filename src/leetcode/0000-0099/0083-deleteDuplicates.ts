import type { ListNode } from '../utils/tree'

/**
 * 83. Remove Duplicates from Sorted List
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/704/linked-lists/4597/ | Link}
 *
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head

  while (node) {
    if (node.val === node.next?.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head
}
