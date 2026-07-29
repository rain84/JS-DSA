/**
 * 2191. Sort the Jumbled Numbers
 * {@link https://leetcode.com/problems/sort-the-jumbled-numbers/ | Link}
 */
export function sortJumbled(mapping: number[], nums: number[]): number[] {
  const idx: Record<number, number> = {}

  for (const num of nums) {
    const i: number[] = []
    for (const digit of String(num)) {
      i.push(mapping[+digit])
    }
    idx[num] = +i.join('')
  }

  nums.sort((a, b) => idx[a] - idx[b])

  return nums
}

export function sortJumbled2(mapping: number[], nums: number[]): number[] {
  const f = (x: number): number => {
    if (!x) return mapping[0]
    let res = 0
    for (let i = 0; x; i++) {
      res += mapping[x % 10] * 10 ** i
      x = (x / 10) | 0
    }
    return res
  }

  const map = nums.map(f)
  const idx = Array.from({ length: nums.length }, (_, i) => i)
  idx.sort((a, b) => map[a] - map[b])

  return idx.map((i) => nums[i])
}
