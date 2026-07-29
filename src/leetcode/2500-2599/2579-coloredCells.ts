/**
 * {@link https://leetcode.com/problems/count-total-number-of-colored-cells | 2579. Count Total Number of Colored Cells}
 *
 * Topics: Math
 */
export function coloredCells(n: number): number {
  return n ** 2 + (n - 1) ** 2
}

export function coloredCells2(n: number): number {
  return 2 * n * (n - 1) + 1
}
