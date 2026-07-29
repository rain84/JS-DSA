/**
 * 2678. Number of Senior Citizens
 * {@link https://leetcode.com/problems/number-of-senior-citizens/ | Link}
 */
export function countSeniors(details: string[]): number {
  return details.filter((x) => +x.slice(11, 13) > 60).length
}
