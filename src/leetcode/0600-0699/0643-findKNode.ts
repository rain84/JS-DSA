import type { ListNode } from '../utils/tree'

/**
 * 643. Maximum Average Subarray I
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4594/ | Link}
 *
 */
export const findKNode = (list: ListNode | null, k: number) => {
  const arr: ListNode[] = []
  let fast: ListNode | null = list
  let slow: ListNode | null = list

  do fast = fast?.next ?? null
  while (--k && fast)

  if (k) return null

  while (fast) {
    fast = fast.next
    slow = slow!.next
  }

  return slow
}
