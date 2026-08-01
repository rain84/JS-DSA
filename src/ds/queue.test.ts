import { Queue } from './queue'

let queue: Queue<string>

beforeEach(() => {
	queue = new Queue('abcde')
})

it('should have "isEmpty()"', () => {
	expect(queue.isEmpty).toBeFalsy()

	queue = new Queue()
	expect(queue.isEmpty).toBeTruthy()
})

it('should have "size"', () => {
	expect(queue.size).toBe(5)

	queue.enqueue('a')
	expect(queue.size).toBe(6)

	queue.dequeue()
	expect(queue.size).toBe(5)

	queue = new Queue()
	expect(queue.size).toBe(0)
})

it('should have "front"', () => {
	expect(queue.front).toBe('a')

	queue.dequeue()
	expect(queue.front).toBe('b')
})

it('should have "enqueue()"', () => {
	for (const ch of 'fgh') queue.enqueue(ch)

	expect(queue.size).toBe(8)
	expect(String(queue)).toBe('abcdefgh')
})

it('should have "dequeue()"', () => {
	const sx = []
	while (!queue.isEmpty) sx.push(queue.dequeue())

	expect(sx.join('')).toBe('abcde')
})

it('should be iterable', () => {
	expect([...queue]).toMatchObject([...'abcde'])
})

it('should have "at()"', () => {
	expect(queue.at(0)).toBe('a')
	expect(queue.at(-1)).toBe('e')

	expect(queue.at(-queue.size)).toBe('a')
	expect(queue.at(-queue.size - 1)).toBeUndefined()

	expect(queue.at(queue.size - 1)).toBe('e')
	expect(queue.at(queue.size)).toBeUndefined()
})

it('should convert to string', () => {
	expect(String(queue)).toBe('abcde')
	expect(`${queue}`).toBe('abcde')

	const queue2 = new Queue([1, 2, 3])
	expect(+queue2).toBe(123)
})
