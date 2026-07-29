import { createTree } from '../utils/tree'
import { hasPathSum } from './0112-hasPathSum'

it('should work 1', () => {
  const tree = createTree('5 [4 [11 7 2]] [8 13 [4 [] 1]]')
  expect(hasPathSum(tree, 22)).toBeTruthy()
})

it('should work 2', () => {
  const tree = createTree('1 2 3')
  expect(hasPathSum(tree, 5)).toBeFalsy()
})
