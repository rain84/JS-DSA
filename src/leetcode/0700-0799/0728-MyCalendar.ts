/**
 * {@link https://leetcode.com/problems/my-calendar-i/ | 729. My Calendar I}
 *
 * Topics: Array | Binary Search | Design | Segment Tree | Ordered Set
 */
export class MyCalendar {
  #time: [number, number][] = []

  book(start: number, end: number): boolean {
    for (const [a, b] of this.#time) {
      if (end <= a || b <= start) continue
      return false
    }

    this.#time.push([start, end])
    return true
  }
}
