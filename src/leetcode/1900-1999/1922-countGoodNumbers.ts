/**
 * {@link https://leetcode.com/problems/count-good-numbers | 1922. Count Good Numbers}
 *
 * Topics: Math | Recursion
 */
export function countGoodNumbers(n: number): number {
  const MOD = 1000000007n
  const qPow = (x: bigint, n: bigint): bigint => {
    let res = 1n

    while (n > 0n) {
      if (n & 1n) {
        res = (res * x) % MOD
      }
      x = (x * x) % MOD
      n >>= 1n
    }

    return res
  }

  const a = qPow(5n, BigInt(Math.floor((n + 1) / 2)))
  const b = qPow(4n, BigInt(Math.floor(n / 2)))

  return Number((a * b) % MOD)
}
