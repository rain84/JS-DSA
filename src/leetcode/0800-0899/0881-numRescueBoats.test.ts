import { numRescueBoats } from './0881-numRescueBoats'

it.each(
  //  prettier-ignore
  [
    [
      [1,2], 3,
      1
    ],
    [
      [3,2,2,1], 3,
      3
    ],
    [
      [3,5,3,4], 5,
      4
    ],
  ]
)('should work %#', (people, limit, output) => {
  expect(numRescueBoats(people, limit)).toBe(output)
})
