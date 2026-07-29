import { getAverages } from './2090-getAverages'

it('should work 1', () => {
  expect(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3)).toMatchObject([
    -1, -1, -1, 5, 4, 4, -1, -1, -1,
  ])
})

it('should work 2', () => {
  expect(getAverages([100000], 0)).toMatchObject([100000])
})

it('should work 3', () => {
  expect(getAverages([8], 100000)).toMatchObject([-1])
})
