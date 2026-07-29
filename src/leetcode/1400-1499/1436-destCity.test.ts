import { destCity } from './1436-destCity'

it('should work 1', () => {
  const paths = [
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ]
  expect(destCity(paths)).toBe('Sao Paulo')
})

it('should work 2', () => {
  const paths = [
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
  ]
  expect(destCity(paths)).toBe('A')
})

it('should work 3', () => {
  const paths = [['A', 'Z']]
  expect(destCity(paths)).toBe('Z')
})
