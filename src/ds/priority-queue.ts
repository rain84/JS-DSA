// Create an alias for the comparison function type.
type CompareFunction<T> = (a: T, b: T) => number

// Define PriorityQueue class template.
/** {@link https://algo.monster/liteproblems/480} */
export class PriorityQueue<T> {
	private data: T[] = []
	private compare: CompareFunction<T>

	constructor(compareFunction: CompareFunction<T>) {
		this.compare = compareFunction
	}

	private leftChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 1
	}

	private rightChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 2
	}

	private parentIndex(childIndex: number): number {
		return Math.floor((childIndex - 1) / 2)
	}

	private hasLeftChild(index: number): boolean {
		return this.leftChildIndex(index) < this.data.length
	}

	private hasRightChild(index: number): boolean {
		return this.rightChildIndex(index) < this.data.length
	}

	private hasParent(index: number): boolean {
		return this.parentIndex(index) >= 0
	}

	private leftChild(index: number): T {
		return this.data[this.leftChildIndex(index)]
	}

	private rightChild(index: number): T {
		return this.data[this.rightChildIndex(index)]
	}

	private parent(index: number): T {
		return this.data[this.parentIndex(index)]
	}

	private swap(indexOne: number, indexTwo: number): void {
		const temp = this.data[indexOne]
		this.data[indexOne] = this.data[indexTwo]
		this.data[indexTwo] = temp
	}

	private heapifyUp(): void {
		let index = this.data.length - 1
		while (this.hasParent(index) && this.compare(this.parent(index), this.data[index]) > 0) {
			this.swap(this.parentIndex(index), index)
			index = this.parentIndex(index)
		}
	}

	private heapifyDown(): void {
		let index = 0
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.leftChildIndex(index)
			if (
				this.hasRightChild(index) &&
				this.compare(this.rightChild(index), this.leftChild(index)) < 0
			) {
				smallerChildIndex = this.rightChildIndex(index)
			}

			if (this.compare(this.data[index], this.data[smallerChildIndex]) < 0) {
				break
			} else {
				this.swap(index, smallerChildIndex)
			}
			index = smallerChildIndex
		}
	}

	public isEmpty(): boolean {
		return this.data.length === 0
	}

	public peek(): T | undefined {
		if (this.data.length === 0) return undefined
		return this.data[0]
	}

	public push(value: T): void {
		this.data.push(value)
		this.heapifyUp()
	}

	public pop(): T | undefined {
		if (this.data.length === 0) return undefined
		if (this.data.length === 1) return this.data.pop()

		const item = this.data[0]
		this.data[0] = this.data.pop()!
		this.heapifyDown()
		return item
	}

	public size(): number {
		return this.data.length
	}

	*[Symbol.iterator]() {
		const data = [...this.data]
		while (this.data.length) yield this.pop()!
		this.data = data
	}
}

// A max heap comparator for numbers.
export const maxHeapCompare: CompareFunction<number> = (a, b) => b - a

// A min heap comparator for numbers.
export const minHeapCompare: CompareFunction<number> = (a, b) => a - b

// Small values are stored in a max heap.
const small: PriorityQueue<number> = new PriorityQueue(maxHeapCompare)
// Large values are stored in a min heap.
const large: PriorityQueue<number> = new PriorityQueue(minHeapCompare)
