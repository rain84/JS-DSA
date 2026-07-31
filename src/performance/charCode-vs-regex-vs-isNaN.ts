import { perf } from 'utils/perf'

const isDigit1 = (ch: string) => {
  const code = ch.charCodeAt(0)
  return isDigit1.zero <= code && code < isDigit1.zero + 10
}
isDigit1.zero = '0'.charCodeAt(0)

const isDigit2 = (ch: string) => isDigit2.regex.test(ch)
isDigit2.regex = /\d/

const isDigit3 = (ch: string) => !Number.isNaN(Number.parseInt(ch))

const isUpperLetter1 = (ch: string) => {
  const code = ch.charCodeAt(0)
  return isUpperLetter1.A <= code && code < isUpperLetter1.A + 26
}
isUpperLetter1.A = 'A'.charCodeAt(0)

const isUpperLetter2 = (ch: string) => isUpperLetter2.regex.test(ch)
isUpperLetter2.regex = /[A-Z]/

const isUpperLetter3 = (ch: string) => /[A-Z]/.test(ch)

const digits = Array.from({ length: 10 }, (_, i) => '' + i)
const chars = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))

const testDigit1 = () => digits.every(isDigit1)
const testDigit2 = () => digits.every(isDigit2)
const testDigit3 = () => digits.every(isDigit3)

const testUpperLetter1 = () => chars.every(isUpperLetter1)
const testUpperLetter2 = () => chars.every(isUpperLetter2)
const testUpperLetter3 = () => chars.every(isUpperLetter3)

perf([testDigit1, testDigit2, testDigit3])
perf([testUpperLetter1, testUpperLetter2, testUpperLetter3])
