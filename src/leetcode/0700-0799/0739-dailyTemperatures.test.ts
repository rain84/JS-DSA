import { dailyTemperatures } from './0739-dailyTemperatures'

it('should work 1', () => {
  const input = [73, 74, 75, 71, 69, 72, 76, 73]
  const output = [1, 1, 4, 2, 1, 1, 0, 0]

  expect(dailyTemperatures(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = [30, 40, 50, 60]
  const output = [1, 1, 1, 0]

  expect(dailyTemperatures(input)).toMatchObject(output)
})

it('should work 3', () => {
  const input = [30, 60, 90]
  const output = [1, 1, 0]

  expect(dailyTemperatures(input)).toMatchObject(output)
})
