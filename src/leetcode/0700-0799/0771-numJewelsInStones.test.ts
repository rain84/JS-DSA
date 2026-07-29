import { numJewelsInStones } from './0771-numJewelsInStones'

it('should work 1', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3)
})

it('should work 2', () => {
  expect(numJewelsInStones('z', 'ZZ')).toBe(0)
})
