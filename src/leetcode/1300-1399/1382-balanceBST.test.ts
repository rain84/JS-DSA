import { createTree } from '../utils/tree'
import { balanceBST, balanceBST2 } from './1382-balanceBST'

it('should work 1', () => {
  // [1,null,2,null,3,null,4,null,null]
  const tree = createTree('1 null [2 null [3 null 4]]')
  const output = createTree('3 [2 1] 4')
  expect(balanceBST2(tree)).toMatchObject(output!)
})

it('should work 2', () => {
  // [2,1,3]
  const tree = createTree('2 1 3')
  const output = createTree('2 1 3')
  expect(balanceBST2(tree)).toMatchObject(output!)
})

it('should work 3', () => {
  // [1,null,2,null,3,null,4,null,null]
  const tree = createTree('1 null [2 null [3 null 4]]')
  const output = createTree('2 1 [3 null 4]')
  expect(balanceBST(tree)).toMatchObject(output!)
})
