/**
 * 49. Group Anagrams
 * {@link https://leetcode.com/problems/group-anagrams/ | Link}
 *
 */
export function groupAnagrams(strs: string[]): string[][] {
  const groups: Record<string, string[]> = {}

  for (const s of strs) {
    const key = [...s].sort().join('')

    if (groups[key]) groups[key].push(s)
    else groups[key] = [s]
  }

  return Object.values(groups)
}
