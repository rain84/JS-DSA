import { updateMatrix } from './0542-updateMatrix'

it('should work 1', () => {
  const input = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  const output = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  expect(updateMatrix(input)).toMatchObject(output)
})

it('should work 2', () => {
  const input = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]
  const output = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 1],
  ]
  expect(updateMatrix(input)).toMatchObject(output)
})

it('should work 3', () => {
  const input = [
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
  ]
  const output = [
    [0, 1, 0, 1, 2],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
  ]
  expect(updateMatrix(input)).toMatchObject(output)
})

it('should work 4', () => {
  const input = [
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
  ]
  const output = [
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 2, 1, 1, 0, 1],
    [2, 1, 1, 1, 1, 2, 1, 0, 1, 0],
    [3, 2, 2, 1, 0, 1, 0, 0, 1, 1],
  ]
  expect(updateMatrix(input)).toMatchObject(output)
})
