/**
 * 1207. Unique Number of Occurrences
 * {@link https://leetcode.com/problems/unique-number-of-occurrences/ | Link}
 */
export function uniqueOccurrences(arr: number[]): boolean {
  const hash = new Map<number, number>()

  for (const x of arr) {
    hash.set(x, (hash.get(x) ?? 0) + 1)
  }

  return new Set(hash.values()).size === new Set(arr).size
}

export function uniqueOccurrences2(arr: number[]): boolean {
  const hash = new Map<number, number>()
  const seen = new Set<number>()

  for (const x of arr) {
    hash.set(x, (hash.get(x) ?? 0) + 1)
  }

  for (const [_, c] of hash) {
    if (seen.has(c)) return false
    seen.add(c)
  }

  return true
}
