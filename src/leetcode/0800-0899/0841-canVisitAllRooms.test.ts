import { canVisitAllRooms } from './0841-canVisitAllRooms'

it('should work 1', () => {
  const rooms = [[1], [2], [3], []]
  expect(canVisitAllRooms(rooms)).toBeTruthy()
})

it('should work 2', () => {
  const rooms = [[1, 3], [3, 0, 1], [2], [0]]
  expect(canVisitAllRooms(rooms)).toBeFalsy()
})
