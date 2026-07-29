import { findMaximizedCapital } from './0502-findMaximizedCapital'

it('should work 1', () => {
  const k = 2
  const w = 0
  const profits = [1, 2, 3]
  const capital = [0, 1, 1]

  expect(findMaximizedCapital(k, w, profits, capital)).toBe(4)
})

it('should work 2', () => {
  const k = 3
  const w = 0
  const profits = [1, 2, 3]
  const capital = [0, 1, 2]

  expect(findMaximizedCapital(k, w, profits, capital)).toBe(6)
})

it('should work 3', () => {
  const k = 1
  const w = 0
  const profits = [1, 2, 3]
  const capital = [1, 1, 2]

  expect(findMaximizedCapital(k, w, profits, capital)).toBe(0)
})

it('should work 4', () => {
  const k = 1
  const w = 2
  const profits = [1, 2, 3]
  const capital = [1, 1, 2]

  expect(findMaximizedCapital(k, w, profits, capital)).toBe(5)
})

it('should work 5', () => {
  const k = 1
  const w = 10
  const profits = [1, 2, 3]
  const capital = [0, 0, 0]

  expect(findMaximizedCapital(k, w, profits, capital)).toBe(13)
})

it('should work 6', () => {
  const k = 11
  const w = 11
  const profits = [1, 2, 3]
  const capital = [11, 12, 13]

  expect(findMaximizedCapital(k, w, profits, capital)).toBe(17)
})
