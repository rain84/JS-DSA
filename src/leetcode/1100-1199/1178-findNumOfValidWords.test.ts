import { findNumOfValidWords } from './1178-findNumOfValidWords'

it('should work 1', () => {
  const words = ['aaaa', 'asas', 'able', 'ability', 'actt', 'actor', 'access']
  const puzzles = ['aboveyz', 'abrodyz', 'abslute', 'absoryz', 'actresz', 'gaswxyz']
  const result = [1, 1, 3, 2, 4, 0]

  expect(findNumOfValidWords(words, puzzles)).toMatchObject(result)
})

it('should work 2', () => {
  const words = ['apple', 'pleas', 'please']
  const puzzles = ['aelwxyz', 'aelpxyz', 'aelpsxy', 'saelpxy', 'xaelpsy']
  const result = [0, 1, 3, 2, 0]

  expect(findNumOfValidWords(words, puzzles)).toMatchObject(result)
})
