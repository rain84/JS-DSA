/**
 * 409. Longest Palindrome
 * {@link https://leetcode.com/problems/longest-palindrome/ | Link}
 */
export function longestPalindrome(s: string): number {
  const odd: Record<string, number> = {}
  let c = 0

  for (const ch of s) {
    odd[ch] ^= 1
    c += odd[ch] ? 1 : -1
  }

  return c ? s.length - c + 1 : s.length
}

export function longestPalindrome2(s: string): number {
  const map = new Map<string, number>()

  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1)
  }

  let res = 0
  let odd = 0
  for (const c of map.values()) {
    res += c
    if (c % 2) odd++
  }

  if (odd) res += 1 - odd

  return res
}

export function longestPalindrome3(s: string): number {
  const odd = new Set<string>()

  for (const ch of s) {
    if (odd.has(ch)) odd.delete(ch)
    else odd.add(ch)
  }

  return odd.size ? s.length - odd.size + 1 : s.length
}

export function longestPalindrome4(s: string): number {
  const odd: Record<string, number> = {}

  for (const ch of s) odd[ch] ^= 1
  const l = Object.values(odd).filter(Boolean).length

  return l ? s.length - l + 1 : s.length
}

export function longestPalindrome5(s: string): number {
  const odd = new Set<string>()
  let res = 0

  for (const ch of s) {
    if (odd.has(ch)) {
      odd.delete(ch)
      res += 2
    } else odd.add(ch)
  }

  return res + +!!odd.size
}
