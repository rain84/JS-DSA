import { createTree } from '../utils/tree'
import { isValidBST } from './0098-isValidBST'

it('should work 1', () => {
  const tree = createTree([2, 1, 3])
  expect(isValidBST(tree)).toBeTruthy()
})

it('should work 2', () => {
  const tree = createTree([2, 5, [4, 3, 6]])
  expect(isValidBST(tree)).toBeFalsy()
})

it('should work 3', () => {
  //               5
  //       1             4
  //  null   null     3    6
  const tree = createTree([5, 1, [4, 3, 6]])
  expect(isValidBST(tree)).toBeFalsy()
})

it('should work 4', () => {
  const tree = createTree([2, 2, 2])
  expect(isValidBST(tree)).toBeFalsy()
})

it('should work 5', () => {
  const tree = createTree([2, 1, 3])
  expect(isValidBST(tree)).toBeTruthy()
})
