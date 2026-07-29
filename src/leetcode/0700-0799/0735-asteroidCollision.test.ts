import { asteroidCollision } from './0735-asteroidCollision'

it('should work 1', () => {
  expect(asteroidCollision([5, 10, -5])).toMatchObject([5, 10])
})

it('should work 2', () => {
  expect(asteroidCollision([8, -8])).toMatchObject([])
})

it('should work 3', () => {
  expect(asteroidCollision([10, 2, -5])).toMatchObject([10])
})

it('should work 4', () => {
  expect(asteroidCollision([-2, -1, 1, 2])).toMatchObject([-2, -1, 1, 2])
})
