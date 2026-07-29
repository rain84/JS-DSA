/**
 * 1002. Find Common Characters
 * {@link https://leetcode.com/problems/find-common-characters/ | Link}
 */
export function commonChars(words: string[]): string[] {
  const freq = Array(26).fill(Number.POSITIVE_INFINITY)
  const res: string[] = []
  const aCode = 'a'.charCodeAt(0)

  for (const w of words) {
    const curr = Array(26).fill(0)

    for (const ch of w) {
      curr[ch.charCodeAt(0) - aCode]++
    }

    for (let i = 0; i < 26; i++) {
      freq[i] = Math.min(freq[i], curr[i])
    }
  }

  for (let i = 0; i < freq.length; i++)
    if (freq[i]) {
      res.push(...String.fromCharCode(i + aCode).repeat(freq[i]))
    }

  return res
}

/** my 1st solution :) */
export function commonChars2(words: string[]): string[] {
  const res: string[] = []
  const map = new Map<string, number>()

  for (const ch of words[0]) {
    map.set(ch, (map.get(ch) ?? 0) + 1)
  }

  for (const s of words.slice(1)) {
    const nextMap = new Map<string, number>()
    for (const ch of s) {
      nextMap.set(ch, (nextMap.get(ch) ?? 0) + 1)
    }

    for (const [ch, c] of nextMap) {
      if (map.has(ch)) {
        map.set(ch, Math.min(map.get(ch)!, c))
      }
    }

    for (const [ch] of map) {
      if (!nextMap.has(ch)) {
        map.delete(ch)
      }
    }
  }

  for (const [ch, c] of map) {
    res.push(...ch.repeat(c))
  }

  return res
}
