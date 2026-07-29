/**
 * 771. Jewels and Stones
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4664/ | Link}
 *
 */
export function numJewelsInStones(jewels: string, stones: string): number {
  let res = 0
  const set = new Set<string>(jewels)

  for (const s of stones) {
    if (set.has(s)) res++
  }

  return res
}

/** Solution with HashMap */
export function numJewelsInStones2(jewels: string, stones: string): number {
  let res = 0
  const map = new Map<string, number>()

  for (const s of stones) {
    map.set(s, (map.get(s) ?? 0) + 1)
  }

  for (const j of jewels) {
    res += map.get(j) ?? 0
  }

  return res
}
