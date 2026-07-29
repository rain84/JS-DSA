import { reverseString } from './0344-reverseString'

it('should work', () => {
  const s = ['h', 'e', 'l', 'l', 'o']
  reverseString(s)

  expect(s).toMatchObject(['o', 'l', 'l', 'e', 'h'])
})

it('should work too', () => {
  const s = ['H', 'a', 'n', 'n', 'a', 'h']
  reverseString(s)

  expect(s).toMatchObject(['h', 'a', 'n', 'n', 'a', 'H'])
})
