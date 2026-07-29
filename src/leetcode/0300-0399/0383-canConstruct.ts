/**
 * 383. Ransom Note
 * {@link https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4607/ | Link}
 *
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const o: Record<string, number> = {}
  let c = 0

  for (const ch of ransomNote) {
    o[ch] = (o[ch] ?? 0) + 1
    c++
  }

  for (const ch of magazine) {
    if (o[ch] === undefined) continue
    if (--o[ch] >= 0) c--
    if (c === 0) return true
  }

  return false
}
