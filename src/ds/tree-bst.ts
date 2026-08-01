import { Queue } from './queue'

type Traverse = 'infix' | 'postfix' | 'prefix'
type Cb<T> = (value: T) => unknown

class Node<T> {
	// prettier-ignore
	constructor(
		public val: T,
		public left: MaybeNull<Node<T>> = null,
		public right: MaybeNull<Node<T>> = null,
	) {}
}

type Selector<T> = (val: T) => number

export class BST<T> {
	#root: MaybeNull<Node<T>> = null
	#selector: Selector<T>

	constructor(selector: Selector<T>) {
		this.#selector = selector
	}

	get rootNode() {
		return this.#root
	}

	insert(val: T) {
		const node = new Node(val)
		const key = this.#selector(val)

		if (!this.#root) {
			this.#root = node
			return this
		}

		let parent: MaybeNull<Node<T>> = this.#root
		let prev: MaybeNull<Node<T>> = null

		while (parent) {
			const parentKey = this.#selector(parent.val)
			if (key === parentKey) return this

			prev = parent
			parent = key < parentKey ? parent.left : parent.right
		}

		parent = <Node<T>>prev
		const parentKey = this.#selector(parent.val)

		if (key < parentKey) parent.left = node
		else parent.right = node

		return this
	}

	search(key: number): T | undefined {
		let node = this.#root
		if (!node) return

		while (node) {
			const nodeKey = this.#selector(node.val)
			if (key === nodeKey) return node.val
			node = key < nodeKey ? node.left : node.right
		}
	}

	bfs(cb: Cb<T>) {
		if (!this.#root) return
		const queue = new Queue<Node<T>>()
		queue.enqueue(this.#root)

		while (!queue.isEmpty) {
			const node = <Node<T>>queue.dequeue()

			if (node?.left) queue.enqueue(node.left)
			if (node?.right) queue.enqueue(node.right)

			cb(node.val)
		}
	}

	dfsInfix(cb: Cb<T>) {
		this.#dfs(cb, 'infix')
	}

	dfsPostfix(cb: Cb<T>) {
		this.#dfs(cb, 'postfix')
	}

	dfsPrefix(cb: Cb<T>) {
		this.#dfs(cb, 'prefix')
	}

	#dfs(cb: Cb<T>, type: Traverse, node = this.#root) {
		if (!node) return

		switch (type) {
			case 'infix':
				if (node?.left) this.#dfs(cb, type, node.left)
				cb(node.val)
				if (node?.right) this.#dfs(cb, type, node.right)
				break

			case 'prefix':
				cb(node.val)
				if (node?.left) this.#dfs(cb, type, node.left)
				if (node?.right) this.#dfs(cb, type, node.right)
				break

			case 'postfix':
				if (node?.left) this.#dfs(cb, type, node.left)
				if (node?.right) this.#dfs(cb, type, node.right)
				cb(node.val)
				break

			default:
				return type as never
		}
	}
}
