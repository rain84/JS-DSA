import { makeGood } from './1544-makeGood'

it('should work 1', () => {
  expect(makeGood('leEeetcode')).toBe('leetcode')
})

it('should work 2', () => {
  expect(makeGood('abBAcC')).toBe('')
})

it('should work 3', () => {
  expect(makeGood('s')).toBe('s')
})
