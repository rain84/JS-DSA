import { random } from 'utils/array'
import { MaxHeap, MinHeap } from './heap'

const heap: { min?: MinHeap; max?: MaxHeap } = {}
const sorted: { min?: number[]; max?: number[] } = {}
const input = [...new Set(random(10, 100))]

beforeEach(() => {
	heap.min = new MinHeap()
	heap.max = new MaxHeap()
	sorted.min = [...input]
	sorted.max = [...input]

	for (const x of input) {
		heap.min.push(x)
		heap.max.push(x)
	}

	sorted.min.sort((a, b) => a - b)
	sorted.max.sort((a, b) => b - a)
})

it('heap should have constructor()', () => {
	heap.min = new MinHeap(input)
	heap.max = new MaxHeap(input)
	expect([...heap.min]).toMatchObject(sorted.min!)
	expect([...heap.max]).toMatchObject(sorted.max!)
})

it('heap should work with a duplicated values', () => {
	const a = [0, 0, 0, 2, 2, 2, 6, 9, 24]
	heap.min = new MinHeap(a)
	heap.max = new MaxHeap(a)
	sorted.min = [...a].sort((a, b) => a - b)
	sorted.max = [...a].sort((a, b) => b - a)
	expect([...heap.min]).toMatchObject(sorted.min!)
	expect([...heap.max]).toMatchObject(sorted.max!)
})

it('heap should have .pop() && .push()', () => {
	heap.min = new MinHeap()
	heap.max = new MaxHeap()
	heap.min.push(5)
	heap.min.push(1)
	heap.max.push(1)
	heap.max.push(5)
	expect(heap.min.pop()).toBe(1)
	expect(heap.min.pop()).toBe(5)
	expect(heap.min.pop()).toBeUndefined()
	expect(heap.max.pop()).toBe(5)
	expect(heap.max.pop()).toBe(1)
	expect(heap.max.pop()).toBeUndefined()
})

it('heap should have .remove()', () => {
	const a = input.splice(5, 1)[0]
	const b = input.splice(7, 1)[0]
	heap.min!.remove(a)
	heap.min!.remove(b)
	heap.max!.remove(a)
	heap.max!.remove(b)
	sorted.min = [...input]
	sorted.max = [...input]
	sorted.min.sort((a, b) => a - b)
	sorted.max.sort((a, b) => b - a)

	expect(heap.min?.size).toBe(input.length)
	expect(heap.max?.size).toBe(input.length)
	expect([...heap.min!]).toMatchObject(sorted.min)
	expect([...heap.max!]).toMatchObject(sorted.max)
})

it('heap should have "size"-getter', () => {
	expect(heap.min!.size).toBe(input.length)
	expect(heap.max!.size).toBe(input.length)
})

it('minHeap should have "peek()"', () => {
	let peeked = heap.min!.peek()
	expect(peeked === heap.min!.peek()).toBeTruthy()
	expect(peeked === heap.min!.pop()).toBeTruthy()
	peeked = heap.max!.peek()
	expect(peeked === heap.max!.peek()).toBeTruthy()
	expect(peeked === heap.max!.pop()).toBeTruthy()
})

it('should work', () => {
	const a = [
		316, 157, 73, 106, 771, 828, 46, 212, 926, 604, 600, 992, 71, 51, 477, 869, 425, 405, 859, 924,
		45, 187, 283, 590, 303, 66, 508, 982, 464, 398,
	]

	heap.min = new MinHeap(a)
	a.sort((a, b) => a - b)
	expect([...heap.min]).toMatchObject(a)
})
