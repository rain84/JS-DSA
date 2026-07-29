/**
 * {@link https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks | 2379. Minimum Recolors to Get K Consecutive Black Blocks}
 *
 * Topics: String | Sliding Window
 */
export function minimumRecolors(blocks: string, k: number): number {
  let [i, c] = [0, 0]

  while (i < k) {
    c += +(blocks[i++] === 'W')
  }

  let res = c
  for (; i < blocks.length; i++) {
    c += +(blocks[i] === 'W')
    c -= +(blocks[i - k] === 'W')
    res = Math.min(res, c)
  }

  return res
}
