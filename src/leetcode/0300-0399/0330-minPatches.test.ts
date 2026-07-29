import { minPatches } from './0330-minPatches'

it('should work 1', () => {
  expect(minPatches([1, 3], 6)).toBe(1)
})

it('should work 2', () => {
  expect(minPatches([1, 5, 10], 20)).toBe(2)
})

it('should work 3', () => {
  expect(minPatches([1, 2, 2], 5)).toBe(0)
})
