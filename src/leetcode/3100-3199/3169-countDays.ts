/**
 * {@link https://leetcode.com/problems/count-days-without-meetings | 3169. Count Days Without Meetings}
 *
 * Topics: Array | Sorting
 */
export function countDays(days: number, meetings: number[][]): number {
  meetings.sort(([a], [b]) => a - b)
  let [a, b] = [0, 0]

  for (let i = 0; i < meetings.length; i++) {
    const meeting = meetings[i]

    if (a === 0) {
      ;[a, b] = meeting
    }

    const nextA = meetings[i + 1]?.[0] ?? Number.POSITIVE_INFINITY
    if (b < nextA) {
      days -= b - a + 1
      a = 0
    } else {
      b = Math.max(b, meetings[i + 1]?.[1])
    }
  }

  return days
}
