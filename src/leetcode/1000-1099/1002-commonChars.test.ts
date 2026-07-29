import { commonChars } from './1002-commonChars'

it('should work 1', () => {
  const result = commonChars(['bella', 'label', 'roller'])
  const expected = ['e', 'l', 'l']

  result.sort()
  expected.sort()

  expect(result).toMatchObject(expected)
})

it('should work 2', () => {
  expect(commonChars(['cool', 'lock', 'cook'])).toMatchObject(['c', 'o'])
})

it('should work 3', () => {
  expect(
    commonChars([
      'acabcddd',
      'bcbdbcbd',
      'baddbadb',
      'cbdddcac',
      'aacbcccd',
      'ccccddda',
      'cababaab',
      'addcaccd',
    ])
  ).toMatchObject([])
})
