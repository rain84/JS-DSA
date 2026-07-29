/**
 * 846. Hand of Straights
 * {@link https://leetcode.com/problems/hand-of-straights/ | Link}
 */
export function isNStraightHand(hand: number[], groupSize: number) {
  const cnt: Record<number, number> = {}

  for (const i of hand) {
    cnt[i] = (cnt[i] ?? 0) + 1
  }

  const keys = Object.keys(cnt).map(Number)

  for (const i of keys) {
    while (cnt[i]) {
      for (let j = i; j < groupSize + i; j++) {
        if (!cnt[j]) return false
        cnt[j]--
      }
    }
  }

  return true
}

/**
 * We got rid of sorting, but unfortunately the solution is very slow
 * because of getting the next minimum element
 * let i = Math.min(...map.keys())
 */
export function isNStraightHand2(hand: number[], groupSize: number) {
  const map = new Map<number, number>()

  for (const i of hand) {
    map.set(i, (map.get(i) ?? 0) + 1)
  }

  let i = Math.min(...map.keys())
  let iPrev = i

  while (i !== Number.POSITIVE_INFINITY) {
    for (let j = 0; j < groupSize; j++) {
      if (!map.has(i)) return false

      const c = map.get(i)! - 1

      if (c) map.set(i, c)
      else map.delete(i)

      i++
    }

    if (map.has(iPrev)) {
      i = iPrev
    } else {
      i = Math.min(...map.keys())
      iPrev = i
    }
  }

  return true
}

/**
 * My 1st attempt
 * I used approach with populating of "buckets" (or groups)
 */
export function isNStraightHand3(hand: number[], groupSize: number): boolean {
  const n = hand.length
  if (n % groupSize) return false

  const groups: number[][] = Array.from({ length: n / groupSize }, () => [])
  hand.sort((a, b) => a - b)

  for (let i = 0; i < n; i++) {
    let isPushed = false

    for (const g of groups) {
      if (g.length === groupSize || (g.length && hand[i] - g.at(-1)! !== 1)) continue

      g.push(hand[i])
      isPushed = true
      break
    }

    if (!isPushed) return false
  }

  return true
}
