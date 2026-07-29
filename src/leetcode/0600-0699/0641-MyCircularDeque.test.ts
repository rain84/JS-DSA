import { MyCircularDeque, MyCircularDeque2 } from './0641-MyCircularDeque'

it('array-based deque should work', () => {
  const res: (boolean | number)[] = []
  const deque = new MyCircularDeque(3)
  res.push(deque.insertLast(1))
  res.push(deque.insertLast(2))
  res.push(deque.insertFront(3))
  res.push(deque.insertFront(4))
  res.push(deque.getRear())
  res.push(deque.isFull())
  res.push(deque.deleteLast())
  res.push(deque.insertFront(4))
  res.push(deque.getFront())

  expect(res).toMatchObject([true, true, true, false, 2, true, true, true, 4])
})

it('doubly-linked list-based deque should work', () => {
  const res: (boolean | number)[] = []
  const deque = new MyCircularDeque2(3)
  res.push(deque.insertLast(1))
  res.push(deque.insertLast(2))
  res.push(deque.insertFront(3))
  res.push(deque.insertFront(4))
  res.push(deque.getRear())
  res.push(deque.isFull())
  res.push(deque.deleteLast())
  res.push(deque.insertFront(4))
  res.push(deque.getFront())

  expect(res).toMatchObject([true, true, true, false, 2, true, true, true, 4])
})
