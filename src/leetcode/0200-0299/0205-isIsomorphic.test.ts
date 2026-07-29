import { isIsomorphic } from './0205-isIsomorphic'

it('should work 1', () => {
  expect(isIsomorphic('egg', 'add')).toBeTruthy()
})

it('should work 2', () => {
  expect(isIsomorphic('foo', 'bar')).toBeFalsy()
})

it('should work 3', () => {
  expect(isIsomorphic('paper', 'title')).toBeTruthy()
})

it('should work 4', () => {
  expect(isIsomorphic('badc', 'baba')).toBeFalsy()
})
