/**
 * {@link https://leetcode.com/problems/number-complement/ | 476. Number Complement}
 *
 * Topics: Bit Manipulation
 */

/*
 * Performance (by 'utils/perf.ts'), args = [5]
 *
 * ─────────────────────────────────────────────────────────────────────
 *  (index)  Function         ops/sec   Time (ms) Iterations  Speed (%)
 * ─────────────────────────────────────────────────────────────────────
 *  1        findComplement2  3061785   326       1000000     100.00
 *  2        findComplement   2405736   415       1000000     78.57
 * ────────────────────────────────────────────────────────────────────
 */

export function findComplement(num: number): number {
  return num ^ (2 ** num.toString(2).length - 1)
}

export function findComplement2(num: number): number {
  return ~num & (2 ** num.toString(2).length - 1)
}
