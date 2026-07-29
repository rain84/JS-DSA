/**
 * 1701. Average Waiting Time
 * {@link https://leetcode.com/problems/average-waiting-time/ | Link}
 */
export function averageWaitingTime(customers: number[][]): number {
  let [total, time] = [0, 0]

  for (const [t, w] of customers) {
    time = Math.max(time, t) + w
    total += time - t
  }

  return total / customers.length
}
