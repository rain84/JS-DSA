/**
 * {@link https://leetcode.com/problems/maximum-swap | 670. Maximum Swap}
 *
 * Topics: Math | Greedy
 */
export function maximumSwap(num: number): number {
  const res = [...String(num)]
  let [min, max, maybeMax, n] = [-1, -1, -1, res.length]

  for (let i = n - 1; i >= 0; i--) {
    if (res[i] > (res[maybeMax] ?? -1)) maybeMax = i
    if (i < maybeMax && res[i] < res[maybeMax]) {
      ;[min, max] = [i, maybeMax]
    }
  }

  if (~min && ~max && min < max) {
    ;[res[min], res[max]] = [res[max], res[min]]
  }

  return +res.join('')
}

/** One-Liner */
export const maximumSwap2 = (
  num: number,
  res = [...String(num)],
  min = -1,
  max = -1,
  maybeMax = -1,
  i = -1,
  n = res.length
): number => (
  res.map(
    (_, j) => (
      (i = n - j - 1),
      res[i] > (res[maybeMax] ?? -1) && (maybeMax = i),
      i < maybeMax && res[i] < res[maybeMax] && ([min, max] = [i, maybeMax])
    )
  ),
  ~min && ~max && min < max && ([res[min], res[max]] = [res[max], res[min]]),
  +res.join('')
)
