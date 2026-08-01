import { SinglyLinkedList } from './singly-linked-list'

let sll: SinglyLinkedList<string | number>

beforeEach(() => {
	sll = new SinglyLinkedList()
	sll.push('Hello', ' ', 'world').push('!!')
})

it('should create with different args', () => {
	sll = new SinglyLinkedList()
	expect(sll.length).toBe(0)

	sll = new SinglyLinkedList(42)
	expect(sll.length).toBe(1)

	sll = new SinglyLinkedList(42, 25)
	expect(sll.length).toBe(2)
	expect(sll.toString()).toBe('4225')
})

it('should have 4 elements', () => {
	expect(sll.length).toBe(4)
})

it('should have "forEach()" and "toString()"', () => {
	expect(String(sll)).toBe('Hello world!!')
})

it('should have "map()"', () => {
	expect(sll.map((val) => `+${val}`).toString()).toBe('+Hello+ +world+!!')
})

it('should have "pop()" and "push()"', () => {
	expect(sll.pop()).toBe('!!')
	expect(sll.toString()).toBe('Hello world')

	sll.push('❤️')
	expect(sll.toString()).toBe('Hello world❤️')
})

it('should have "shift()" and "unshift()"', () => {
	expect(sll.shift()).toBe('Hello')
	expect(sll.toString()).toBe(' world!!')

	sll.unshift('Hello')
	expect(sll.toString()).toBe('Hello world!!')

	sll.unshift('🙂').unshift('🍯').unshift('🍕')
	expect(sll.toString()).toBe('🍕🍯🙂Hello world!!')
})

it('should have "get()" and "set()"', () => {
	expect(sll.get(-1)).toBeUndefined()
	expect(sll.get(4)).toBeUndefined()
	expect(sll.get(2)).toBe('world')

	sll.set(1, '🙂')
	expect(sll.toString()).toBe('Hello🙂world!!')
})

it('should have "insert()"', () => {
	expect(sll.insert(-1, 'Data')).toBeUndefined()
	expect(sll.insert(10, 'Data')).toBeUndefined()
	expect(sll.insert(1, '🙏')!.insert(3, '🔥')!.toString()).toBe('Hello🙏 🔥world!!')
})

it('should have "remove()"', () => {
	expect(sll.remove(-1)).toBeUndefined()
	expect(sll.remove(10)).toBeUndefined()
	expect(sll.remove(2)).toBe('world')
	expect(sll.toString()).toBe('Hello !!')
})

it('should have "reverse()"', () => {
	const sll = new SinglyLinkedList().push(1, 2, 3, 4)
	expect(sll.toString()).toBe('1234')
	expect(sll.reverse().reverse().reverse().toString()).toBe('4321')
	expect(sll.reverse().toString()).toBe('1234')
	expect(sll.pop()).toBe(4)
	expect(sll.toString()).toBe('123')
	expect(sll.shift()).toBe(1)
	expect(sll.toString()).toBe('23')
	expect((sll.set(0, 5), sll.toString())).toBe('53')
	expect(sll.reverse().toString()).toBe('35')
})

it('should be iterable', () => {
	sll = new SinglyLinkedList(12, 34, 56)
	expect([...sll]).toMatchObject([12, 34, 56])
})
