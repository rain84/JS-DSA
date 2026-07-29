import { create } from '../utils/linked-list'
import { middleNode } from './0876-middleNode'

it('should work 1', () => {
  const input = create([1, 2, 3, 4, 5])
  const output = create([3, 4, 5])

  expect(middleNode(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = create([1, 2, 3, 4, 5, 6])
  const output = create([4, 5, 6])

  expect(middleNode(input)).toMatchObject(output)
})
