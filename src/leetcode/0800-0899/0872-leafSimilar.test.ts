import { createTree } from '../utils/tree'
import { leafSimilar } from './0872-leafSimilar'

it('should work 1', () => {
  const tree1 = createTree('3 [5 6 [2 7 4]] [1 9 8]')
  const tree2 = createTree('3 [5 6 7] [1 4 [2 9 8]]')

  expect(leafSimilar(tree1, tree2)).toBeTruthy()
})

it('should work 2', () => {
  const tree1 = createTree('3 [5 6 [2 7 4]] [1 9 8]')
  const tree2 = createTree('3 [5 6 7] [1 4 [2 9 8]]')

  expect(leafSimilar(tree1, tree2)).toBeTruthy()
})

it('should work 3', () => {
  const tree1 = createTree('1 2')
  const tree2 = createTree('2 2')

  expect(leafSimilar(tree1, tree2)).toBeTruthy()
})

it('should work 4', () => {
  const tree1 = createTree('1 2 3')
  const tree2 = createTree('1 3 2')

  expect(leafSimilar(tree1, tree2)).toBeFalsy()
})

it('should work 5', () => {
  /*   
                      3  
            5                 1  
     6           2        9      8  
null  null    7    14

                      3 
          5                       1 
    6          71           4          2 
null null   null null   null null    9   8
*/

  const tree1 = createTree([3, [5, [6], [2, 7, 14]], [1, 9, 8]])
  const tree2 = createTree([3, [5, 6, 71], [1, 4, [2, 9, 8]]])

  expect(leafSimilar(tree1, tree2)).toBeFalsy()
})
