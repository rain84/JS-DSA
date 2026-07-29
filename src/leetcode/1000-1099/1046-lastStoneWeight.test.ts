import { lastStoneWeight } from './1046-lastStoneWeight'

it('should work 1', () => {
  expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1)
})

it('should work 2', () => {
  expect(lastStoneWeight([1])).toBe(1)
})

it('should work 3', () => {
  expect(lastStoneWeight([1, 3])).toBe(2)
})

it('should work 4', () => {
  expect(
    lastStoneWeight([
      316, 157, 73, 106, 771, 828, 46, 212, 926, 604, 600, 992, 71, 51, 477, 869, 425, 405, 859,
      924, 45, 187, 283, 590, 303, 66, 508, 982, 464, 398,
    ])
  ).toBe(0)
})

it('should work 5', () => {
  expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1)
})
