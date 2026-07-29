/**
 * 881. Boats to Save People
 * {@link https://leetcode.com/problems/boats-to-save-people/ | Link}
 */
export function numRescueBoats(people: number[], limit: number): number {
  let [res, l, r] = [0, 0, people.length - 1]
  people.sort((a, b) => a - b)

  while (l <= r) {
    if (people[l] + people[r] <= limit) l++
    r--
    res++
  }

  return res
}
