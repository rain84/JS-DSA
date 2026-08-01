import { Deque } from './deque'

let deque: Deque<string>

beforeEach(() => {
	deque = new Deque('abcde')
})

it('should have "isEmpty()"', () => {
	expect(deque.isEmpty).toBeFalsy()

	deque = new Deque()
	expect(deque.isEmpty).toBeTruthy()
})

it('should have "size"', () => {
	expect(deque.size).toBe(5)

	deque.pushBack('a')
	expect(deque.size).toBe(6)

	deque.popFront()
	expect(deque.size).toBe(5)

	deque = new Deque()
	expect(deque.size).toBe(0)
})

it('should have "popFront"', () => {
	expect(deque.front).toBe('a')

	deque.popFront()
	expect(deque.front).toBe('b')
})

it('should have "back"', () => {
	expect(deque.back).toBe('e')

	deque.popBack()
	expect(deque.back).toBe('d')
})

it('should have "pushBack()"', () => {
	for (const ch of 'fgh') {
		deque.pushBack(ch)
	}

	expect(deque.size).toBe(8)
	expect(String(deque)).toBe('abcdefgh')
})

it('should have "pushFront()"', () => {
	for (const ch of 'fgh') {
		deque.pushFront(ch)
	}

	expect(deque.size).toBe(8)
	expect(String(deque)).toBe('hgfabcde')
})

it('should have "popFront()"', () => {
	const sx = []
	while (!deque.isEmpty) sx.push(deque.popFront())

	expect(sx.join('')).toBe('abcde')
})

it('should have "popBack()"', () => {
	const sx = []
	while (!deque.isEmpty) sx.push(deque.popBack())

	expect(sx.join('')).toBe('edcba')
})

it('should be iterable', () => {
	expect([...deque].join('')).toBe('abcde')
	expect(deque.size).toBe(5)
})

it('should have "at()', () => {
	expect(deque.at(0)).toBe('a')
	expect(deque.at(-1)).toBe('e')

	expect(deque.at(-deque.size)).toBe('a')
	expect(deque.at(-deque.size - 1)).toBeUndefined()

	expect(deque.at(deque.size - 1)).toBe('e')
	expect(deque.at(deque.size)).toBeUndefined()
})

it('should be able to convert to primitive value', () => {
	expect(String(deque)).toBe('abcde')
	expect(deque.toString()).toBe('abcde')
	expect(`${deque}`).toBe('abcde')

	const dequeue2 = new Deque([1, 2, 3])
	expect(+dequeue2).toBe(123)
})

it('should have "clear()', () => {
	deque.clear()
	expect(deque.front).toBeUndefined()
	expect(deque.back).toBeUndefined()
	expect(deque.isEmpty).toBeTruthy()
	expect(deque.size).toBeFalsy()
})
