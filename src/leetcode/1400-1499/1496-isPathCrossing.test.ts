import { isPathCrossing } from './1496-isPathCrossing'

it('should work 1', () => {
  expect(isPathCrossing('NES')).toBeFalsy()
})

it('should work 2', () => {
  expect(isPathCrossing('NESWW')).toBeTruthy()
})

it('should work 3', () => {
  expect(isPathCrossing('ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS')).toBeFalsy()
})
