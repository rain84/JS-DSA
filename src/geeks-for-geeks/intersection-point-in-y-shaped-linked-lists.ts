// https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1

type Maybe<T> = T | null | undefined

export const intersectPoint = (head1: Maybe<INode>, head2: Maybe<INode>) => {
	if (!head1 || !head2) return -1

	const length = [0, 0]
	let pointer: [Maybe<INode>, Maybe<INode>] = [head1, head2]

	length.forEach((_, i) => {
		do length[i]++
		while ((pointer[i] = pointer[i]?.next))
	})

	let diff = Math.abs(length[0] - length[1])
	if (diff) {
		pointer = length[0] < length[1] ? [head1, head2] : [head2, head1]
		while (diff--) pointer[1] = pointer[1]?.next
	} else pointer = [head1, head2]

	while (pointer[0]) {
		if (pointer[0] === pointer[1]) return pointer[0].data
		pointer[0] = pointer[0]?.next
		pointer[1] = pointer[1]?.next
	}

	return -1
}

export interface INode {
	data: number
	next: INode | null
}

export class Node implements INode {
	constructor(
		public data: number,
		public next: INode | null = null,
	) {}
}

export const createFromString = (str: string) => {
	const numbers = str.split(/\D+/)
	return numbers.reduceRight<INode>((next, val) => new Node(+val, next), new Node(+numbers.pop()!))
}
