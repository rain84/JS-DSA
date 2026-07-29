import { numTeams2, numTeams3 } from './1395-numTeams'

it.each(
  //  prettier-ignore
  [
    [
      [2,5,3,4,1],
      3
    ],
    [
      [2,1,3],
      0
    ],
    [
      [1,2,3,4],
      4
    ],
  ]
)('should work %#', (input, output) => {
  // expect(numTeams(input)).toBe(output)
  expect(numTeams2(input)).toBe(output)
  expect(numTeams3(input)).toBe(output)
  // expect(numTeams4(input)).toBe(output)
})
