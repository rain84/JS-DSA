import { reverseOnlyLetters } from './0917-reverseOnlyLetters'

it('should work 1', () => {
  expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba')
})

it('should work 2', () => {
  expect(reverseOnlyLetters('a-bC-dEf-ghIj')).toBe('j-Ih-gfE-dCba')
})

it('should work 3', () => {
  expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe('Qedo1ct-eeLg=ntse-T!')
})
