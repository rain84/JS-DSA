import { DoublyLinkedList } from './doubly-linked-list'

let list: DoublyLinkedList<string | number>

beforeEach(() => {
	list = new DoublyLinkedList()
	list.push('Hello', ' ', 'world').push('!!')
})

it('should create with different args', () => {
	list = new DoublyLinkedList()
	expect(list.length).toBe(0)

	list = new DoublyLinkedList(42)
	expect(list.length).toBe(1)

	list = new DoublyLinkedList(42, 25)
	expect(list.length).toBe(2)
	expect(list.toString()).toBe('4225')
})

it('should have 4 elements', () => {
	expect(list.length).toBe(4)
})

it('should have "forEach()" and "toString()"', () => {
	expect(`${list}`).toBe('Hello world!!')
})

it('should have "map()"', () => {
	expect(list.map((val) => `+${val}`).toString()).toBe('+Hello+ +world+!!')
})

it('should have "pop()" and "push()"', () => {
	expect(list.pop()).toBe('!!')
	expect(list.toString()).toBe('Hello world')

	list.push('❤️')
	expect(list.toString()).toBe('Hello world❤️')
})

it('should have "shift()" and "unshift()"', () => {
	expect(list.shift()).toBe('Hello')
	expect(list.toString()).toBe(' world!!')

	list.unshift('Hello')
	expect(list.toString()).toBe('Hello world!!')
	expect(list.unshift('🙏').unshift('🔥').unshift('🍺').toString()).toBe('🍺🔥🙏Hello world!!')
})

it('should have "get()" and "set()"', () => {
	expect(list.get(-1)).toBeUndefined()
	expect(list.get(4)).toBeUndefined()
	expect(list.get(2)).toBe('world')

	list.set(1, '🙂')
	expect(list.toString()).toBe('Hello🙂world!!')

	list = new DoublyLinkedList(...'Hello world')
	expect(list.toString()).toBe('Hello world')
	expect(list.get(list.length)).toBeUndefined()
	expect(list.get(-1)).toBeUndefined()
	expect(list.get(0)).toBe('H')
	expect(list.get(list.length - 1)).toBe('d')
})

it('should have "insert()"', () => {
	expect(list.insert(-1, 'Data')).toBeUndefined()
	expect(list.insert(10, 'Data')).toBeUndefined()
	expect(list.insert(1, '🙏')!.insert(3, '🔥')!.toString()).toBe('Hello🙏 🔥world!!')
})

it('should have "remove()"', () => {
	expect(list.remove(-1)).toBeUndefined()
	expect(list.remove(10)).toBeUndefined()
	expect(list.remove(2)).toBe('world')
	expect(list.toString()).toBe('Hello !!')
})

it('should be iterable', () => {
	list = new DoublyLinkedList(12, 34, 56)
	expect([...list]).toMatchObject([12, 34, 56])
})
