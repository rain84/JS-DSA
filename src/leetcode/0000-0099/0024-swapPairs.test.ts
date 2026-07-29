import { create } from '../utils/linked-list'
import { swapPairs } from './0024-swapPairs'

it('should work 1', () => {
  const input = create([1, 2, 3, 4])
  const output = create([2, 1, 4, 3])

  expect(swapPairs(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = create([])
  const output = create([])

  expect(swapPairs(input)).toMatchObject(output)
})

it('should work 3', () => {
  const input = create([1])
  const output = create([1])

  expect(swapPairs(input)).toMatchObject(output)
})

it('should work 4', () => {
  const input = create([1, 2, 3, 4, 5, 6, 7, 8])
  const output = create([2, 1, 4, 3, 6, 5, 8, 7])

  expect(swapPairs(input)).toMatchObject(output)
})
