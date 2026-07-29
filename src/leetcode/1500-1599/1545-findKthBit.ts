/**
 * {@link https://leetcode.com/problems/find-kth-bit-in-nth-binary-string | 1545. Find Kth Bit in Nth Binary String}
 */
export function findKthBit(n: number, k: number): string {
  const f = function f(n: number): number[] {
    if (n === 1) return [0]
    const arr = f(n - 1)
    return arr.concat(1, arr.map((x) => x ^ 1).reverse())
  }

  return String(f(n)[k - 1])
}

/** One-Liner */
export const findKthBit2 = (
  n: number,
  k: number,
  f = (n: number, arr?: number[]): number[] =>
    (n === 1 && [0]) || ((arr = f(n - 1)), arr.concat(1, arr.map((x) => x ^ 1).reverse()))
): string => '' + f(n)[k - 1]

/** Bit Manipulation */
export const findKthBit3 = (n: number, k: number): string =>
  '' + ((((k / (k & -k)) >> 1) & 1) ^ (k & 1) ^ 1)
