import { maxProfitAssignment } from './0826-maxProfitAssignment'

it('should work 1', () => {
  const difficulty = [2, 4, 6, 8, 10]
  const profit = [10, 20, 30, 40, 50]
  const worker = [4, 5, 6, 7]

  expect(maxProfitAssignment(difficulty, profit, worker)).toBe(100)
})

it('should work 2', () => {
  const difficulty = [85, 47, 57]
  const profit = [24, 66, 99]
  const worker = [40, 25, 25]

  expect(maxProfitAssignment(difficulty, profit, worker)).toBe(0)
})

it('should work 3', () => {
  const difficulty = [68, 35, 52, 47, 86]
  const profit = [67, 17, 1, 81, 3]
  const worker = [92, 10, 85, 84, 82]

  expect(maxProfitAssignment(difficulty, profit, worker)).toBe(324)
})
