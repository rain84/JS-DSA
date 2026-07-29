/**
 * 2037. Minimum Number of Moves to Seat Everyone
 * {@link https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/ | Link}
 */
export function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)
  return seats.reduce((acc, _, i) => acc + Math.abs(seats[i] - students[i]), 0)
}
