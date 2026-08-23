import { ListNode } from '../utils/linked-list'

/**
 * 21. Merge Two Sorted Lists
 * {@link https://leetcode.com/problems/merge-two-sorted-lists/ | Link}
 *
 * Topics: Linked List | Recursion
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	if (!list1 || !list2) return list1 ?? list2

	if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2)
		return list1
	} else {
		list2.next = mergeTwoLists(list1, list2.next)
		return list2
	}
}
