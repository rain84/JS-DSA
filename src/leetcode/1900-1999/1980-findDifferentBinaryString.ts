/**
 * {@link https://leetcode.com/problems/find-unique-binary-string | 1980. Find Unique Binary String}
 *
 * Topics: Array | Hash Table | String | Backtracking
 */
export function findDifferentBinaryString(nums: string[]): string {
  const set = new Set(nums.map((x) => Number.parseInt(x, 2)))
  let res = 0

  while (set.has(res)) {
    res++
  }

  return res.toString(2).padStart(nums[0].length, '0')
}

export function findDifferentBinaryString2(nums: string[]): string {
  const res: string[] = []

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i][i]
    res.push(x === '0' ? '1' : '0')
  }

  return res.join('')
}
