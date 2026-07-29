import { findCircleNum } from './0547-findCircleNum'

it('should work 1', () => {
  const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]
  expect(findCircleNum(isConnected)).toBe(2)
})

it('should work 2', () => {
  const isConnected = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]
  expect(findCircleNum(isConnected)).toBe(3)
})
