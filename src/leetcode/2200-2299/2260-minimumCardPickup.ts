/**
 * 2260. Minimum Consecutive Cards to Pick Up
 * {@link https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/ | Link}
 *
 */
export function minimumCardPickup(cards: number[]): number {
  let res = Number.POSITIVE_INFINITY
  const map = new Map<number, number>()

  for (let i = 0; i < cards.length; i++) {
    if (map.has(cards[i])) {
      res = Math.min(res, i - map.get(cards[i])! + 1)
    }

    map.set(cards[i], i)
  }

  return res === Number.POSITIVE_INFINITY ? -1 : res
}
