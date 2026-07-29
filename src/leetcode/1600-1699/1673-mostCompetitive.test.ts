import { mostCompetitive } from './1673-mostCompetitive'

it('should work 1', () => {
  expect(mostCompetitive([3, 5, 2, 6], 2)).toMatchObject([2, 6])
})

it('should work 2', () => {
  expect(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4)).toMatchObject([2, 3, 3, 4])
})

it('should work 2', () => {
  expect(mostCompetitive([71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2], 3)).toMatchObject([
    8, 80, 2,
  ])
})
