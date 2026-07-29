import { canConstruct } from './0383-canConstruct'

it('should work 1', () => {
  expect(canConstruct('a', 'b')).toBe(false)
})

it('should work 2', () => {
  expect(canConstruct('aa', 'ab')).toBe(false)
})

it('should work 3', () => {
  expect(canConstruct('aa', 'aab')).toBe(true)
})

it('should work 4', () => {
  expect(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj')).toBe(true)
})
