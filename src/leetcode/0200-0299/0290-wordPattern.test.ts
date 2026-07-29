import { wordPattern } from './0290-wordPattern'

it('should work 1', () => {
  expect(wordPattern('abba', 'dog cat cat dog')).toBeTruthy()
})

it('should work 2', () => {
  expect(wordPattern('abba', 'dog cat cat fish')).toBeFalsy()
})

it('should work 3', () => {
  expect(wordPattern('aaaa', 'dog cat cat dog')).toBeFalsy()
})

it('should work 4', () => {
  expect(wordPattern('abba', 'dog dog dog dog')).toBeFalsy()
})

it('should work 5', () => {
  expect(wordPattern('abba', 'dog constructor constructor dog')).toBeTruthy()
})
