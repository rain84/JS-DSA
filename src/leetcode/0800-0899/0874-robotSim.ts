/**
 * {@link https://leetcode.com/problems/walking-robot-simulation/ | 874. Walking Robot Simulation}
 *
 * Topics: Array | Hash Table | Simulation
 */
export function robotSim(commands: number[], obstacles: number[][]): number {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let d = 0

  let [x, y] = [0, 0]

  for (const x of commands) {
    switch (x) {
      case -1:
        d = (d + 1) % 4
        break
      case -2:
        d = (d + 3) % 4
        break
      default:
    }
  }

  return x ** 2 + y ** 2
}
