import { MinStack } from './0155-MinStack'

it('should work 1', () => {
  const minStack = new MinStack()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  minStack.push(1)

  expect(minStack.getMin()).toBe(-3)

  minStack.pop()
  expect(minStack.top()).toBe(-3)
  expect(minStack.getMin()).toBe(-3)

  minStack.pop()
  expect(minStack.top()).toBe(0)
  expect(minStack.getMin()).toBe(-2)

  minStack.pop()
  expect(minStack.getMin()).toBe(-2)
})
