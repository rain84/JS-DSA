/**
 * 1732. Find the Highest Altitude
 * {@link https://leetcode.com/problems/find-the-highest-altitude | Link}
 *
 */
export function largestAltitude(gain: number[]): number {
  let res = 0
  let sum = 0

  for (const val of gain) {
    sum += val
    if (res < sum) res = sum
  }

  return res
}
