import { DoublyLinkedList } from './repeat_knowledge'

let list: DoublyLinkedList<string | number>

beforeEach(() => {
	list = new DoublyLinkedList()
	list.push('Hello', ' ', 'world').push('!!')
})

it('Should create with different args', () => {
	list = new DoublyLinkedList()
	expect(list.length).toBe(0)

	list = new DoublyLinkedList(42)
	expect(list.length).toBe(1)

	list = new DoublyLinkedList(42, 25)
	expect(list.length).toBe(2)
	expect(list.toString()).toBe('4225')
})

it('Should have 4 elements', () => {
	expect(list.length).toBe(4)
})

it('Should have "forEach()" and "toString()"', () => {
	expect(String(list)).toBe('Hello world!!')
})

it('Should have "map()"', () => {
	expect(list.map((val) => `+${val}`).toString()).toBe('+Hello+ +world+!!')
})

it('Should have "pop()" and "push()"', () => {
	expect(list.pop()).toBe('!!')
	expect(list.toString()).toBe('Hello world')

	list.push('❤️')
	expect(list.toString()).toBe('Hello world❤️')
})

it('Should have "shift()" and "unshift()"', () => {
	expect(list.shift()).toBe('Hello')
	expect(list.toString()).toBe(' world!!')

	list.unshift('Hello')
	expect(list.toString()).toBe('Hello world!!')
})

it('Should have "get()" and "set()"', () => {
	expect(list.get(-1)).toBeUndefined()
	expect(list.get(4)).toBeUndefined()
	expect(list.get(2)).toBe('world')

	list.set(1, '🙂')
	expect(list.toString()).toBe('Hello🙂world!!')
})

it('Should have "insert()"', () => {
	expect(list.insert(-1, 'Data')).toBeUndefined()
	expect(list.insert(10, 'Data')).toBeUndefined()
	expect(list.insert(1, '🙏')!.insert(3, '🔥')!.toString()).toBe('Hello🙏 🔥world!!')
})

it('Should have "remove()"', () => {
	expect(list.remove(-1)).toBeUndefined()
	expect(list.remove(10)).toBeUndefined()
	expect(list.remove(2)).toBe('world')
	expect(list.toString()).toBe('Hello !!')
})

it('Should be iterable', () => {
	list = new DoublyLinkedList(12, 34, 56)
	expect([...list]).toMatchObject([12, 34, 56])
})
