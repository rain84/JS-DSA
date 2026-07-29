import { createTree } from '../utils/tree'
import { rangeSumBST } from './0938-rangeSumBST'

it('should work 1', () => {
  const tree = createTree('10 [5 3 7] [15 null 18]')
  expect(rangeSumBST(tree, 7, 15)).toBe(32)
})

it('should work 2', () => {
  const tree = createTree('10 [5 [3 1] [7 6]] [15 13 18]')
  expect(rangeSumBST(tree, 6, 10)).toBe(23)
})

it('should work 3', () => {
  // [15,9,21,7,13,19,23,5,null,11,null,17]
  //                 15
  //       9                 21
  //   7       13        19      23
  // 5 null  11 null   17
  const tree = createTree('15 [ 9 [7 5] [13 11]]   [21 [19 17] 23]')
  expect(rangeSumBST(tree, 19, 21)).toBe(40)
})

it('should work 4', () => {
  // [15,9,21,7,13,19,23,5,null,11,null,17]
  //                     15
  //         9                       21
  //   7           13            19      23
  // 5 null      11 null       17
  const tree = createTree('15 [ 9 [7 5] [13 11]]   [21 [19 17] 23]')
  expect(rangeSumBST(tree, 21, 23)).toBe(44)
})

it('should work 5', () => {
  // [18,9,27,6,15,24,30,3,null,12,null,21]
  //                   18
  //         9                  27
  //   6         15          24        30
  // 3 null    12 null    21
  const tree = createTree('18 [9 [6 3] [15 12]] [27 [24 21] 30]')
  expect(rangeSumBST(tree, 18, 24)).toBe(63)
})
