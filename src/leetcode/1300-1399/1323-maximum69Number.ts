/**
 * 1323. Maximum 69 Number
 * {@link https://leetcode.com/problems/maximum-69-number/ | Link}
 */
export function maximum69Number(num: number): number {
  return Number(String(num).replace('6', '9'))
}
