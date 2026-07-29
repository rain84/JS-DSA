import { RecentCounter } from './0933-RecentCounter'

it('should work 1', () => {
  const recentCounter = new RecentCounter()
  expect(recentCounter.ping(1)).toBe(1)
  expect(recentCounter.ping(100)).toBe(2)
  expect(recentCounter.ping(3001)).toBe(3)
  expect(recentCounter.ping(3002)).toBe(3)
})
