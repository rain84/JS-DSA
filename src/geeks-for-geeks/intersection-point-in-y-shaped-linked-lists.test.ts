import {
	createFromString,
	intersectPoint,
	Node,
} from './intersection-point-in-y-shaped-linked-lists'

describe('GFG. Intersection Point in Y Shaped Linked Lists', () => {
	it('Node should be creatable', () => {
		expect(new Node(42).data).toBe(42)
	})

	it('createFromString() should work', () => {
		const list = createFromString('7 5 9 60 50 34 26 40 13')
		expect(list.data).toBe(7)
		expect(list?.next).not.toBeNull()
		expect(list.next?.next?.data).toBe(9)
		expect(list.next?.next?.next?.next?.next?.data).toBe(34)
		expect(list.next?.next?.next?.next?.next?.next?.next?.next?.next).toBeNull()
	})

	describe('intersectPoint()', () => {
		type T = [Node, Node, Node]

		it.each([
			[...(['3 6 9', '10', '15 30'].map(createFromString) as T), 15],
			[...(['4 1', '5 6 1', '8 4 5'].map(createFromString) as T), 8],
		])('%# should work', (list1: Node, list2: Node, common: Node, result: number) => {
			let l = list1
			while (l.next) l = l.next
			l.next = common

			l = list2
			while (l.next) l = l.next
			l.next = common

			expect(intersectPoint(list1, list2)).toBe(result)
		})
	})
})
