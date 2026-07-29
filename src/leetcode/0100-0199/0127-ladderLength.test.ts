import { ladderLength } from './0127-ladderLength'

it('should work 1', () => {
  const beginWord = 'hit'
  const endWord = 'cog'
  const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
  expect(ladderLength(beginWord, endWord, wordList)).toBe(5)
})

it('should work 2', () => {
  const beginWord = 'hit'
  const endWord = 'cog'
  const wordList = ['hot', 'dot', 'dog', 'lot', 'log']
  expect(ladderLength(beginWord, endWord, wordList)).toBe(0)
})
