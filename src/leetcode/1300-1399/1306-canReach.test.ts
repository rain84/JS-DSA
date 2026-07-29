import { canReach } from './1306-canReach'

it('should work 1', () => {
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toBeTruthy()
})

it('should work 2', () => {
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 0)).toBeTruthy()
})

it('should work 3', () => {
  expect(canReach([3, 0, 2, 1, 2], 2)).toBeFalsy()
})
