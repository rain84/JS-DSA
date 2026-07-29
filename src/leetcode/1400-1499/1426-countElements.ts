/**
 * 1426. Counting Elements
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4661/ | Link}
 *
 */
export function countElements(arr: number[]): number {
  const set = new Set<number>(arr)
  let c = 0

  for (const x of arr) {
    if (set.has(x + 1)) c++
  }

  return c
}
