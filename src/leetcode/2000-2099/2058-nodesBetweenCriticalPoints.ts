import type { ListNode } from '../utils/linked-list'

/**
 * 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
 * {@link https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/ | Link}
 */
export function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  const res = [Number.POSITIVE_INFINITY, -1]
  let [iFirst, iPrev] = [-1, -1]

  for (let i = 1; head?.next?.next; i++, head = head.next) {
    const [a, b, c] = [head.val, head.next.val, head.next.next.val]

    if ((a > b && b < c) || (a < b && b > c)) {
      if (iFirst === -1) {
        iFirst = i
        iPrev = i
      } else {
        res[0] = Math.min(res[0], i - iPrev)
        iPrev = i
        res[1] = i - iFirst
      }
    }
  }

  return iFirst === iPrev ? [-1, -1] : res
}
