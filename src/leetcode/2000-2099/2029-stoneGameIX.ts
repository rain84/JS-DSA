/**
 * 2029. Stone Game IX
 * {@link https://leetcode.com/problems/stone-game-ix/ | Link}
 *
 * Topics: Greedy | Array | Math | Counting | Game Theory
 */
export function stoneGameIX(stones: number[]): boolean {
  if (stones.length === 1) return false

  const cnt = Array(3).fill(0)
  for (const x of stones) cnt[x % 3]++

  const check = (x: number, cnt: number[]): boolean => {
    if (--cnt[x] < 0) return false

    let c = 1
    while (cnt[1] || cnt[2]) {
      if (cnt[x]) {
        cnt[x]--
        x = x === 1 ? 2 : 1
      } else return (c + cnt[0]) % 2 === 1
      c++
    }

    return false
  }

  return check(1, [...cnt]) || check(2, cnt)
}
