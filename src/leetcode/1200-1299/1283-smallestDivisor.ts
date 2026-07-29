/**
 * 1283. Find the Smallest Divisor Given a Threshold
 * {@link https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/ | Link}
 */
export function smallestDivisor(nums: number[], threshold: number): number {
  let [l, r] = [1, Math.max(...nums)]

  while (l <= r) {
    const i = (l + r) >> 1
    let sum = 0
    for (const x of nums) sum += Math.ceil(x / i)

    if (sum <= threshold) r = i - 1
    else l = i + 1
  }

  return l
}
