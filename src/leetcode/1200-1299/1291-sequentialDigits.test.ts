import { getSequentialDigits, nextSequential } from './sequentialDigits'

it('getSequentialDigits() should work', () => {
  expect(getSequentialDigits(100, 300)).toMatchObject([123, 234])
  expect(getSequentialDigits(1000, 13000)).toMatchObject([
    1234, 2345, 3456, 4567, 5678, 6789, 12345,
  ])
  expect(getSequentialDigits(1000, 13000)).toMatchObject([
    1234, 2345, 3456, 4567, 5678, 6789, 12345,
  ])
  expect(getSequentialDigits(234, 2314)).toMatchObject([234, 345, 456, 567, 678, 789, 1234])
  expect(getSequentialDigits(89, 234)).toMatchObject([89, 123, 234])
})

it('nextSequential() should work', () => {
  expect(nextSequential(9)).toBeUndefined()
  expect(nextSequential(10)).toBe(12)
  expect(nextSequential(13)).toBe(23)
  expect(nextSequential(6789)).toBe(6789)
  expect(nextSequential(72345)).toBe(123456)
  expect(nextSequential(10 ** 9 + 1)).toBeUndefined()
})
