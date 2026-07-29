import { createTree } from '../utils/tree'
import { bstToGst } from './1038-bstToGst'

it('should work 1', () => {
  // [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
  //              4
  //     1                6
  // 0,     2,        5,      7
  //           3,               8
  const tree = createTree('4 [1 0 [2 null 3]] [6 5 [7 null 8]]')

  // [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
  //             30
  //      36            21
  //  36      35    26      15
  //            33              8
  const tree2 = createTree('30 [36 36 [35 null 33]] [21 26 [15 null 8]]')!

  expect(bstToGst(tree)).toMatchObject(tree2)
})

it('should work 2', () => {
  // [0,null,1]
  const tree = createTree('0 null 1')
  const tree2 = createTree('1 null 1')!
  expect(bstToGst(tree)).toMatchObject(tree2)
})
