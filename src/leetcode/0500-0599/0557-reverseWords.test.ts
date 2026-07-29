import { reverseWords } from './0557-reverseWords'

it('should work 1', () => {
  const s = "Let's take LeetCode contest"
  expect(reverseWords(s)).toBe("s'teL ekat edoCteeL tsetnoc")
})

it('should work 2', () => {
  const s = 'Mr Ding'
  expect(reverseWords(s)).toBe('rM gniD')
})

it('should work 3', () => {
  const s = 'I love u'
  expect(reverseWords(s)).toBe('I evol u')
})
