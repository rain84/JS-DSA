import { Stack } from './stack'

let stack: Stack<string>

beforeEach(() => {
	stack = new Stack(...'abcdefg')
})

it('should have ctor, "push()", "isEmpty()" & "size()"', () => {
	expect(stack.size()).toBe(7)
	expect(stack.peek()).toBe('g')

	stack = new Stack<string>()
	expect(stack.isEmpty()).toBeTruthy()

	stack.push('a').push('b').push('c')
	expect(stack.isEmpty()).toBeFalsy()
	expect(stack.size()).toBe(3)
	expect(stack.peek()).toBe('c')
})

it('should have "pop()" & "peek()"', () => {
	expect(stack.pop()).toBe('g')
	expect(stack.peek()).toBe('f')
	expect(stack.size()).toBe(6)

	stack.pop()
	stack.pop()
	stack.pop()
	stack.pop()
	stack.pop()
	expect(stack.peek()).toBe('a')
	expect(stack.pop()).toBe('a')
	expect(stack.pop()).toBeUndefined()
	stack.pop()
	expect(stack.pop()).toBeUndefined()
})
