import { createTree } from '../utils/tree'
import { deepestLeavesSum } from './1302-deepestLeavesSum'

it('should work 1', () => {
  const tree = createTree('1 [2 [4 7] 5] [3 [] [6 [] 8]]')
  expect(deepestLeavesSum(tree)).toBe(15)
})

it('should work 2', () => {
  // [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
  //                   6
  //         7                       8
  //   2          7           1            3
  // 9  null    1   4    null  null   null   5
  const tree = createTree([6, [7, [2, 9], [7, 1, 4]], [8, 1, [3, null, 5]]])
  expect(deepestLeavesSum(tree)).toBe(19)
})
