import { finalPrices } from './1673-finalPrices'

it('should work 1', () => {
  expect(finalPrices([8, 4, 6, 2, 3])).toMatchObject([4, 2, 4, 2, 3])
})

it('should work 2', () => {
  expect(finalPrices([1, 2, 3, 4, 5])).toMatchObject([1, 2, 3, 4, 5])
})

it('should work 3', () => {
  expect(finalPrices([10, 1, 1, 6])).toMatchObject([9, 0, 1, 6])
})

it('should work 4', () => {
  expect(finalPrices([8, 7, 4, 2, 8, 1, 7, 7, 10, 1])).toMatchObject([1, 3, 2, 1, 7, 0, 0, 6, 9, 1])
}) //                [1, 3, 2, 1, 7, 0, 0, 6,  9, 1]
