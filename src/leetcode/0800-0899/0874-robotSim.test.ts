import { robotSim } from './0874-robotSim'

it.each(
  //  prettier-ignore
  [
    [
      [4,-1,3], [],
      25
    ],
    [
      [4,-1,4,-2,4], [[2,4]],
      65
    ],
    [
      [6,-1,-1,6], [],
      36
    ]
  ]
)('should work %#', (commands, obstacles, output) => {
  expect(robotSim(commands, obstacles)).toBe(output)
})
