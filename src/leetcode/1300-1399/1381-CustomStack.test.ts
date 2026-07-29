import { CustomStack, CustomStack2 } from './1381-CustomStack'

it('CustomStack should work', () => {
  const res: number[] = []
  const stk = new CustomStack(3)
  stk.push(1)
  stk.push(2)
  res.push(stk.pop())
  stk.push(2)
  stk.push(3)
  stk.push(4)
  stk.increment(5, 100)
  stk.increment(2, 100)
  res.push(stk.pop())
  res.push(stk.pop())
  res.push(stk.pop())
  res.push(stk.pop())

  expect(res).toMatchObject([2, 103, 202, 201, -1])
})

it('CustomStack2 should work', () => {
  const res: number[] = []
  const stk = new CustomStack2(3)
  stk.push(1)
  stk.push(2)
  res.push(stk.pop())
  stk.push(2)
  stk.push(3)
  stk.push(4)
  stk.increment(5, 100)
  stk.increment(2, 100)
  res.push(stk.pop())
  res.push(stk.pop())
  res.push(stk.pop())
  res.push(stk.pop())

  expect(res).toMatchObject([2, 103, 202, 201, -1])
})
