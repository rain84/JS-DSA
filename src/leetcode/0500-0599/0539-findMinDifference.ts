/**
 * {@link https://leetcode.com/problems/minimum-time-difference/ | 539. Minimum Time Difference}
 *
 * Topics: Array | Math | String | Sorting
 */
export function findMinDifference(timePoints: string[]): number {
  const tp: number[] = []
  const n = timePoints.length

  for (const t of timePoints) {
    const [h, m] = t.split(':').map(Number)
    const time = 60 * h + m
    tp.push(time)
  }

  tp.sort((a, b) => a - b)
  tp.push(tp[0] + 1440)

  let res = Number.POSITIVE_INFINITY
  for (let i = 0; i < n; i++) {
    res = Math.min(res, tp[i + 1] - tp[i])
  }

  return res
}

console.log(findMinDifference(['12:12', '00:13']))
