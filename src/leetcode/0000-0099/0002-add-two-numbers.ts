import { ListNode } from '../utils/linked-list'

/**
 * 2. Add Two Numbers
 * {@link https://leetcode.com/problems/add-two-numbers/ | Link}
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let node = new ListNode(0)
	const res = node
	let x = 0

	while (l1 || l2 || x) {
		node.next = new ListNode((l1?.val ?? 0) + (l2?.val ?? 0) + x)
		node = node.next
		x = 0

		if (node.val > 9) {
			x = 1
			node.val %= 10
		}

		l1 = l1?.next ?? null
		l2 = l2?.next ?? null
	}

	return res.next
}
