import { random } from '../utils/array'
import { textToWords } from '../utils/string'
import { BinaryHeap } from './binary-heap'

type minmax = 'min' | 'max'
type TValues = {
	max: number[]
	min: number[]
}

interface IRandomData {
	key: number
	val: string
}

const heap: Record<minmax, MaybeNull<BinaryHeap>> = {
	max: null,
	min: null,
}
const sorted: Record<minmax, MaybeNull<number[]>> = {
	max: null,
	min: null,
}
const input = [...new Set(random(10, 100))]

beforeEach(() => {
	heap.max = BinaryHeap.createMax().fill(input)
	heap.min = BinaryHeap.createMin().fill(input)
	sorted.min = [...input]
	sorted.max = [...input]
	sorted.min.sort((a, b) => a - b)
	sorted.max.sort((a, b) => b - a)
})

it('Binary heaps should have "push()" and "pop()"', () => {
	const values: TValues = {
		max: [],
		min: [],
	}

	while (heap.max?.size) values.max.push(heap.max?.pop()!)
	while (heap.min?.size) values.min.push(heap.min?.pop()!)

	expect(values.max).toMatchObject(sorted.max!)
	expect(values.min).toMatchObject(sorted.min!)
})

it('should have "size"-getter', () => {
	expect(heap.max?.size).toBe(input.length)
	expect(heap.min?.size).toBe(input.length)
})

it('should implement [Symbol.iterator]', () => {
	expect([...heap.max!]).toMatchObject(sorted.max!)
	expect([...heap.min!]).toMatchObject(sorted.min!)
})

it('should work with a complex data structure', () => {
	const words = textToWords(
		'Проверяющая  сторона (WebAuthn Relying Party) — web-сервер — хранит открытый ключ, связанный с аккаунтом пользователя, проверяет корректность подписи своих запросов закрытым ключом, хранящимся в аутентификаторе.',
	)
	words.length = 10
	const randomData: IRandomData[] = getRandomComplexData(words)

	const heap = {
		min: BinaryHeap.createMin<IRandomData>(({ key }) => key),
		max: BinaryHeap.createMax<IRandomData>(({ key }) => key),
	}
	heap.min.fill(randomData)
	heap.max.fill(randomData)

	expect([...heap.min].map(({ val }) => val)).toMatchObject(words)

	words.reverse()
	expect([...heap.max].map(({ val }) => val)).toMatchObject(words)
})

function getRandomComplexData(words: string[]): IRandomData[] {
	const randomArr = random(10, 10000)
	const sortedMap = [...randomArr]
		.sort((a, b) => a - b)
		.reduce<Record<string, number>>((acc, val, key) => ((acc[val] = key), acc), {})

	const randomData = randomArr.map((key) => ({
		key,
		val: words[sortedMap[key]],
	}))

	return randomData
}

it('should have "peek()"', () => {
	let peeked = heap.max?.peek()
	expect(peeked === heap.max?.peek()).toBeTruthy()
	expect(peeked === heap.max?.pop()).toBeTruthy()

	peeked = heap.min?.peek()
	expect(peeked === heap.min?.peek()).toBeTruthy()
	expect(peeked === heap.min?.pop()).toBeTruthy()
})

it('should work', () => {
	const a = [
		316, 157, 73, 106, 771, 828, 46, 212, 926, 604, 600, 992, 71, 51, 477, 869, 425, 405, 859, 924,
		45, 187, 283, 590, 303, 66, 508, 982, 464, 398,
	]

	heap.min = BinaryHeap.createMin().fill(a)
	a.sort((a, b) => a - b)
	expect([...heap.min]).toMatchObject(a)
})
