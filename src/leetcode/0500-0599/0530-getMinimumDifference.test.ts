import { createTree } from '../utils/tree'
import { getMinimumDifference } from './0530-getMinimumDifference'

it('should work 1', () => {
  const tree = createTree('4 [2 1 3] 6')
  expect(getMinimumDifference(tree)).toBe(1)
})

it('should work 2', () => {
  const tree = createTree('1 0 [48 12 49]')
  expect(getMinimumDifference(tree)).toBe(1)
})

it('should work 3', () => {
  /** @ */
  // [236,104,701,null,227,null,911]
  //         236
  //     104     701
  // null 227 null 911
  // biome-ignore lint:
  const tree = createTree([236, [104, , 227], [701, , 911]])
  expect(getMinimumDifference(tree)).toBe(9)
})
