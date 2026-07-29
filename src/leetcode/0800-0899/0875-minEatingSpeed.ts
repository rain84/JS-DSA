/**
 * 875. Koko Eating Bananas
 * {@link https://leetcode.com/problems/koko-eating-bananas/ | Link}
 */
export function minEatingSpeed(piles: number[], h: number): number {
  let [l, r] = [0, Math.max(...piles)]

  const check = (x: number) => {
    let hours = 0

    for (const p of piles) {
      hours += Math.ceil(p / x)
      if (hours > h) return false
    }

    return true
  }

  while (l <= r) {
    const m = (l + r) >> 1

    if (check(m)) r = m - 1
    else l = m + 1
  }

  return l
}
