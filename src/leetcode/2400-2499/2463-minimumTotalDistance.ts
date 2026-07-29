/**
 * {@link https://leetcode.com/problems/minimum-total-distance-traveled | 2463. Minimum Total Distance Traveled}
 *
 * Topics: Array | Dynamic Programming | Sorting
 */
export function minimumTotalDistance(robot: number[], factory: number[][]): number {
  let res = 0
  const pos: Record<number, { robot?: boolean; limit?: number }> = {}

  for (const i of robot) {
    pos[i] = { robot: true }
  }

  for (const [i, limit] of factory) {
    pos[i] = { ...(pos[i] ?? {}), limit }
  }
  pos
  const [factories, iRobots]: [[number, number][], number[]] = [[], []]

  for (let [key, { robot, limit }] of Object.entries(pos)) {
    const i = +key

    if (robot) iRobots.push(i)

    if (limit) {
      iRobots
      if (!iRobots.length) {
        factories.push([i, limit])
        continue
      }
      limit
      i
      const r = iRobots.pop()!

      factories
      if (factories.length) {
        let [prevI, prevLimit] = factories.pop()!

        res += Math.min(r - prevI, i - r)
        if (r - prevI < i - r) prevLimit--
        else limit--

        if (prevLimit) factories.push([prevI, prevLimit])
        if (limit) factories.push([i, limit])
      }
    }
  }

  iRobots
  factories

  return res
}

console.log(
  minimumTotalDistance(
    [0, 4, 6],
    [
      [2, 2],
      [6, 2],
    ]
  )
)
