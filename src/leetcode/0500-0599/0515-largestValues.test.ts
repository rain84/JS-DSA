import { createTree } from '../utils/tree'
import { largestValues } from './0515-largestValues'

it('should work 1', () => {
  const tree = createTree('1 [3 5 3] [2 null 9]')
  expect(largestValues(tree)).toMatchObject([1, 3, 9])
})

it('should work 2', () => {
  const tree = createTree('1 2 3')
  expect(largestValues(tree)).toMatchObject([1, 3])
})
