import { createTree } from '../utils/tree'
import { maxDepth } from './0104-maxDepth'

it('should work 1', () => {
  const tree = createTree('3 9 [20 15 7]')
  expect(maxDepth(tree)).toBe(3)
})

it('should work 2', () => {
  const tree = createTree('3 [] 2')
  expect(maxDepth(tree)).toBe(2)
})
