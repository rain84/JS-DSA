import { MovingAverage } from './0346-MovingAverage'

it('should work 1', () => {
  const movingAverage = new MovingAverage(3)

  expect(movingAverage.next(1)).toBe(1.0)
  expect(movingAverage.next(10)).toBe(5.5)
  expect(movingAverage.next(3)).toBe(4.66667)
  expect(movingAverage.next(5)).toBe(6.0)
})
