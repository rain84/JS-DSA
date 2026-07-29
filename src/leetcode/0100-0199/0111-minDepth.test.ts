import { createTree } from '../utils/tree'
import { minDepth } from './0111-minDepth'

it('should work 1', () => {
  const tree = createTree('3 9 [20 15 7]')
  expect(minDepth(tree)).toBe(2)
})

it('should work 2', () => {
  const tree = createTree('2 null [3 null [4 null [5 null 6]]]')
  expect(minDepth(tree)).toBe(5)
})
