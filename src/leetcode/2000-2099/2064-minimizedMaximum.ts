/**
 * {@link https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store | 2064. Minimized Maximum of Products Distributed to Any Store}
 *
 * Topics: Array | Binary Search
 */
export function minimizedMaximum(n: number, quantities: number[]): number {
  let [l, r] = [0, Math.max(...quantities)]

  while (l < r) {
    const mid = (l + r) >> 1

    let cnt = 0
    for (const q of quantities) {
      cnt += Math.ceil(q / mid)
    }

    if (cnt <= n) r = mid
    else l = mid + 1
  }

  return l
}

console.log(minimizedMaximum(6, [11, 6]))
