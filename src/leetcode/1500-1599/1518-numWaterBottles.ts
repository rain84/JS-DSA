/**
 * 1518. Water Bottles
 * {@link https://leetcode.com/problems/water-bottles/ | Link}
 */
export function numWaterBottles(numBottles: number, numExchange: number): number {
  let res = numBottles

  for (; numBottles >= numExchange; res++) {
    numBottles -= numExchange - 1
  }

  return res
}
