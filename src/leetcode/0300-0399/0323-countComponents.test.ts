import { countComponents } from './0323-countComponents'

it('should work 1', () => {
  const n = 5
  const edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ]
  expect(countComponents(n, edges)).toBe(2)
})

it('should work 2', () => {
  const n = 5
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ]
  expect(countComponents(n, edges)).toBe(1)
})

it('should work 3', () => {
  const n = 4
  const edges = [
    [2, 3],
    [1, 2],
    [1, 3],
  ]
  expect(countComponents(n, edges)).toBe(2)
})
