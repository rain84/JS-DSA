import { isValid } from './0020-isValid'

it('should work 1', () => {
  expect(isValid('()')).toBeTruthy()
})

it('should work 2', () => {
  expect(isValid('()[]{}')).toBeTruthy()
})

it('should work 3', () => {
  expect(isValid('(]')).toBeFalsy()
})
