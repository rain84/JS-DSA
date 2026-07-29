import { isNStraightHand } from './0846-isNStraightHand'

it('should work 1', () => {
  expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBeTruthy()
})

it('should work 2', () => {
  expect(isNStraightHand([1, 2, 3, 4, 5], 4)).toBeFalsy()
})

it('should work 3', () => {
  expect(isNStraightHand([8, 10, 12], 3)).toBeFalsy()
})

it('should work 4', () => {
  expect(isNStraightHand([1, 5], 2)).toBeFalsy()
})

it('should work 5', () => {
  expect(isNStraightHand([1, 2, 3, 8, 5, 6, 7, 8], 4)).toBeFalsy()
})

it('should work 6', () => {
  expect(isNStraightHand([1, 1, 2, 2, 3, 3], 2)).toBeFalsy()
})

it('should work 7', () => {
  expect(isNStraightHand([1, 1, 2, 2, 3, 3], 3)).toBeTruthy()
})

it('should work 8', () => {
  expect(isNStraightHand([8, 8, 9, 7, 7, 7, 6, 7, 10, 6], 2)).toBeTruthy()
})

it('should work 9', () => {
  expect(isNStraightHand([0, 0], 2)).toBeFalsy()
})
