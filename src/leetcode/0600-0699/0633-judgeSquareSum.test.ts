import { judgeSquareSum } from './0633-judgeSquareSum'

it('should work 1', () => {
  expect(judgeSquareSum(5)).toBeTruthy()
})

it('should work 2', () => {
  expect(judgeSquareSum(3)).toBeFalsy()
})

it('should work 3', () => {
  expect(judgeSquareSum(2)).toBeTruthy()
})
