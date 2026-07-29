/**
 * 205. Isomorphic Strings
 * {@link https://leetcode.com/problems/isomorphic-strings/ | Link}
 */
export function isIsomorphic(s: string, t: string): boolean {
  const mapS: Record<string, string> = {}
  const mapT: Record<string, string> = {}

  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] ??= t[i]
    mapT[t[i]] ??= s[i]

    if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false
  }

  return true
}
