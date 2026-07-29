/**
 * 1189. Maximum Number of Balloons
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4663/ | Link}
 *
 */
export function maxNumberOfBalloons(text: string): number {
  const map: Record<string, number> = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  }

  for (const ch of text) {
    if (ch in map) map[ch]++
  }

  const min1 = Math.min(map.b, map.a, map.n)
  const min2 = Math.floor(Math.min(map.l, map.o) / 2)

  if (!min1 || !min2) return 0

  return Math.min(min1, min2)
}
