import { createTree } from '../utils/tree'
import { zigzagLevelOrder } from './0103-zigzagLevelOrder'

it('should work 1', () => {
  const tree = createTree('3 9 [20 15 7]')
  expect(zigzagLevelOrder(tree)).toMatchObject([[3], [20, 9], [15, 7]])
})

it('should work 2', () => {
  const tree = createTree('1')
  expect(zigzagLevelOrder(tree)).toMatchObject([[1]])
})

it('should work 3', () => {
  const tree = createTree('')
  expect(zigzagLevelOrder(tree)).toMatchObject([])
})
