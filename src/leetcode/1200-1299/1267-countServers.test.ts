import { countServers } from './1267-countServers'

it.each(
  //  prettier-ignore
  [
    [
      [[1,0],[0,1]],
      0
    ],
    [
      [[1,0],[1,1]],
      3
    ],
    [
      [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]],
      4
    ]
  ]
)('should work %#', (input, output) => {
  expect(countServers(input)).toBe(output)
})
