/**
 * {@link https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box | 1769. Minimum Number of Operations to Move All Balls to Each Box}
 *
 * Topics: Array | String | Prefix Sum
 */
export function minOperations(boxes: string): number[] {
  const n = boxes.length
  const res = Array(n).fill(0)
  const ones: number[] = []

  for (let i = 0; i < n; i++) {
    if (+boxes[i]) {
      ones.push(i)
    }
  }

  for (let i = 0; i < n; i++) {
    for (const j of ones) {
      res[i] += Math.abs(i - j)
    }
  }

  return res
}
