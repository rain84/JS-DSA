import { openLock } from './0752-openLock'

it('should work 1', () => {
  const deadends = ['0201', '0101', '0102', '1212', '2002']
  const target = '0202'
  expect(openLock(deadends, target)).toBe(6)
})

it('should work 2', () => {
  const deadends = ['8888']
  const target = '0009'
  expect(openLock(deadends, target)).toBe(1)
})

it('should work 3', () => {
  const deadends = ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888']
  const target = '8888'
  expect(openLock(deadends, target)).toBe(-1)
})
