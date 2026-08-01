const generateRandomArray = (length: number, max = length) =>
	new Array(length).fill(0).map(() => ~~(Math.random() * (max + 1)))
const isSorted = (arr: number[]) =>
	arr.every((val, i, arr) => val >= (arr[i - 1] ?? Number.NEGATIVE_INFINITY))

const binarySearch = (arr: number[], val: number) => {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const middle = Math.floor((right + left) / 2)

		if (arr[middle] === val) return middle
		if (arr[middle] < val) left = middle + 1
		else right = middle - 1
	}

	return -1
}

const testBinarySearch = () => {
	const data = [2, 5, 6, 9, 13, 15, 28, 30]
	for (const elem of data) {
		console.log(`binarySearch([${data.toString()}], ${elem})`, binarySearch(data, elem))
	}
	console.log(`binarySearch([${data.toString()}], -1)`, binarySearch(data, -1))
	console.log(`binarySearch([${data.toString()}], 103)`, binarySearch(data, 103))
}

const bubbleSort = (arr: number[]) => {
	let i = arr.length - 1
	let isSorted = false

	while (!isSorted && i--) {
		isSorted = true
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				isSorted = false
			}
		}
	}

	return arr
}

const testBubbleSort = () => {
	// console.log('bubbleSort([29, 10, 14, 30, 37, 14, 8])', bubbleSort([29, 10, 14, 30, 37, 14, 8]))
	const data = [1, 6, 48, 15, 26, 30, 32, 33, 36, 42, 45, 46, 47]
	console.log(`bubbleSort([${data.toString()}])`, bubbleSort(data))
}

const selectionSort = (arr: number[]) => {
	let i = 0

	while (i < arr.length) {
		let min = i

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j
		}

		if (arr[i] !== arr[min]) {
			;[arr[i], arr[min]] = [arr[min], arr[i]]
		}

		i++
	}

	return arr
}

const testSelectionSort = () => {
	const data = generateRandomArray(10, 100)
	console.log(`selectionSort(${data.toString()})`, selectionSort(data))
}

const insertionSort = (arr: number[]) => {
	for (let i = 1; i < arr.length; i++) {
		const element = arr[i]
		let j = i - 1

		if (arr[j] <= element) continue

		for (; j >= 0 && arr[j] > element; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = element
	}

	return arr
}

const testInsertionSort = () => {
	const data = generateRandomArray(10, 10000)
	console.log(`insertionSort(${data.toString()})`, insertionSort(data).toString())
}

const mergeSort = (arr: number[]): number[] => {
	if (arr.length <= 1) return arr

	const middle = Math.floor(arr.length / 2)
	const arrLeft = mergeSort(arr.slice(0, middle))
	const arrRight = mergeSort(arr.slice(middle))

	const result = []
	let i = 0
	let j = 0

	while (i < arrLeft.length && j < arrRight.length) {
		const el = arrLeft[i] <= arrRight[j] ? arrLeft[i++] : arrRight[j++]
		result.push(el)
	}

	const rest = i === arrLeft.length ? arrRight.slice(j) : arrLeft.slice(i)
	result.push(...rest)

	return result
}

const testMergeSort = () => {
	const data = generateRandomArray(100, 10000)
	const maybeSorted = mergeSort(data)
	console.log(`mergeSort(${data.toString()})`, maybeSorted, isSorted(maybeSorted))
}

const swap = (arr: number[], i: number, j: number) => ([arr[i], arr[j]] = [arr[j], arr[i]])

export const qsort = (arr: number[], left = 0, right = arr.length - 1) => {
	if (left >= right) return

	let pivotIndex = left
	const pivot = arr[pivotIndex]

	for (let i = left + 1; i <= right; i++) {
		if (arr[i] < pivot) {
			swap(arr, ++pivotIndex, i)
		}
	}

	swap(arr, pivotIndex, left)
	qsort(arr, left, pivotIndex - 1)
	qsort(arr, pivotIndex + 1, right)
}

const testQsort = () => {
	const data = generateRandomArray(10, 100)
	console.log(`target: ${data[0]}`)
	console.log(`[${data.toString()}]`)
	qsort(data)
	console.log(`[${data.toString()}]`)
	console.log(`${isSorted(data)}`)
}

const radixSort = (arr: number[]) => {
	let radixIndex = 1

	while (true) {
		const bucket: number[][] = Array.from({ length: 10 }, () => [])

		for (const digit of arr) {
			const place = getDigitAtIndex(digit, radixIndex)
			bucket[place].push(digit)
		}

		arr.length = 0
		arr.concat(bucket.flat())
		if (bucket[0].length === arr.length) break

		radixIndex++
	}

	return arr
}

const radixSort3 = (arr: number[]) => {
	let indexes = arr.map((_, key) => key)
	let pos = 1

	while (true) {
		const slots: number[][] = Array.from({ length: 10 }, () => [])

		for (let i = 0; i < indexes.length; i++) {
			const index = indexes[i]
			const slot = getDigitAtIndex(arr[index], pos)
			slots[slot].push(index)
		}

		indexes = slots.flat()
		if (slots[0].length === arr.length) break
		pos++
	}

	const sortedArr = indexes.map((i) => +arr[i])
	return sortedArr
}

const radixSort2 = (arr: number[]) => {
	const arrAsStr = arr.map(String)
	const indexes = arr.map((_, key) => key)
	let pos = 1

	while (true) {
		const slots: number[][] = [[], [], [], [], [], [], [], [], [], []]
		for (let i = 0; i < indexes.length; i++) {
			const index = indexes[i]
			const digit = arrAsStr[index]
			const slot = +(digit[digit.length - pos] ?? 0)
			slots[slot].push(index)
		}

		pos++
		indexes.length = 0
		for (const slot of slots) {
			for (const i of slot) {
				indexes.push(i)
			}
		}

		if (slots[0].length === arr.length) break
		slots.length = 0
	}

	const sortedArr = indexes.map((i) => +arr[i])
	return sortedArr
}

const testRadixSort = () => {
	const data = generateRandomArray(10, 10000)
	console.log(data.toString())
	radixSort(data)
	console.log(data.toString())
	console.log(isSorted(data))
}

class Node<T> {
	val: T
	next: null | Node<T> = null
	prev: null | Node<T> = null

	constructor(val: T) {
		this.val = val
	}
}

export class DoublyLinkedList<T = unknown> {
	#head: Node<T> | null = null
	#tail: Node<T> | null = null
	#length = 0

	constructor(...vals: T[]) {
		this.push(...vals)
	}

	get length() {
		return this.#length
	}

	push(...vals: T[]) {
		for (const val of vals) {
			const node = new Node<T>(val)
			const isEmpty = this.#head === null && this.#tail === null

			if (isEmpty) this.#head = this.#tail = node
			else {
				node.prev = this.#tail
				;(<Node<T>>this.#tail).next = node
				this.#tail = node
			}

			this.#length++
		}

		return this
	}

	pop(): T | undefined {
		if (this.#tail === null) return

		const val = this.#tail?.val
		this.#length--

		if (this.#length === 0) {
			this.#head = this.#tail = null
			return val
		}

		this.#tail = this.#tail.prev
		;(<Node<T>>this.#tail).next = null

		return val
	}

	shift(): T | undefined {
		if (this.#length === 0) return

		const val = this.#head?.val
		this.#length--

		this.#head = this.#head?.next ?? null

		if (this.#head) this.#head.prev = null
		if (this.#length === 0) {
			this.#tail = null
		}

		return val
	}

	unshift(val: T) {
		const node = new Node(val)

		this.#length++

		if (!this.#head || !this.#tail) {
			this.#head = this.#tail = node
			return this
		}

		this.#head.prev = node
		node.next = this.#head
		this.#head = node

		return this
	}

	get(index: number): T | undefined {
		const node = this.#getNode(index)
		if (!node) return

		return node?.val
	}

	set(index: number, val: T) {
		const node = this.#getNode(index)

		if (!node) return
		node.val = val

		return true
	}

	insert(index: number, val: T) {
		if (!(this.#withinBounds(index) || index === this.length)) return

		if (index === 0) return this.unshift(val)
		if (index === this.#length) return this.push(val)

		const node = new Node(val)
		const prev = <Node<T>>this.#getNode(index - 1)
		const next = prev.next

		node.next = next
		node.prev = prev
		prev.next = node

		if (next) next.prev = node
		this.#length++

		return this
	}

	remove(index: number) {
		if (!this.#withinBounds(index)) return

		if (index === 0) return this.shift()
		if (index === this.#length - 1) return this.pop()

		this.#length--
		const prev = <Node<T>>this.#getNode(index - 1)
		const val = prev?.next?.val
		const next = prev.next?.next ?? null

		prev.next = next
		if (next) next.prev = prev

		return val
	}

	forEach(cb: (val: T, i?: number) => unknown) {
		let node = this.#head
		let i = 0

		while (node) {
			cb(node.val, i++)
			node = node.next
		}

		return this
	}

	map(cb: (val: T, i?: number) => T) {
		let node = this.#head
		let i = 0

		while (node) {
			node.val = cb(node.val, i++)
			node = node.next
		}

		return this
	}

	toString() {
		const arr: T[] = []
		// biome-ignore lint:
		this.forEach((val) => arr.push(val))

		return arr.join('')
	}

	*[Symbol.iterator]() {
		let node = this.#head

		while (node) {
			yield node.val
			node = node.next
		}
	}

	#getNode(index: number): Node<T> | undefined {
		if (!this.#withinBounds(index)) return

		let node = this.#head

		while (index--) {
			node = node?.next ?? null
		}

		return node as Node<T>
	}

	#withinBounds(index: number) {
		return 0 <= index && index < this.#length && this.#length
	}
}

function getDigitAtIndex(digit: number, position: number) {
	return ~~(Math.abs(digit) / 10 ** (position - 1)) % 10
}
