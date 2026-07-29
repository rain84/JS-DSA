import { replaceWords } from './0648-replaceWords'

it('should work 1', () => {
  const dictionary = ['cat', 'bat', 'rat']
  const sentence = 'the cattle was rattled by the battery'
  const output = 'the cat was rat by the bat'
  expect(replaceWords(dictionary, sentence)).toBe(output)
})

it('should work 2', () => {
  const dictionary = ['a', 'b', 'c']
  const sentence = 'aadsfasf absbs bbab cadsfafs'
  const output = 'a a b c'
  expect(replaceWords(dictionary, sentence)).toBe(output)
})

it('should work 3', () => {
  const dictionary = ['a', 'aa', 'aaa', 'aaaa']
  const sentence = 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa'
  const output = 'a a a a a a a a bbb baba a'
  expect(replaceWords(dictionary, sentence)).toBe(output)
})
