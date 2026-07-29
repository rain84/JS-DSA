import { moveZeroes } from './0283-moveZeroes'

it('should work 1', () => {
  const data = [0, 1, 0, 3, 12]
  moveZeroes(data)
  expect(data).toMatchObject([1, 3, 12, 0, 0])
})

it('should work 2', () => {
  const data = [0]
  moveZeroes(data)
  expect(data).toMatchObject([0])
})
