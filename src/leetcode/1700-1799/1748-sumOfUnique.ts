/**
 * 1748. Sum of Unique Elements
 * {@link https://leetcode.com/problems/sum-of-unique-elements/ | Link}
 */
export function sumOfUnique(nums: number[]): number {
  const entries: number[] = []

  for (const x of nums) {
    entries[x] ??= -1
    entries[x]++
  }

  return entries.reduce((acc, count, x) => (count ? acc : acc + x), 0)
}

export function sumOfUnique2(nums: number[]): number {
  const hash: Record<number, number> = {}
  let sum = 0

  for (const x of nums) {
    hash[x] ??= 0

    if (++hash[x] === 1) sum += x
    else if (hash[x] === 2) sum -= x
  }

  return sum
}

export function sumOfUnique3(nums: number[]): number {
  const hash: Record<number, number> = {}
  let sum = 0

  for (const x of nums) {
    sum += x
    hash[x] ??= 0
    hash[x]++
  }

  const diff = Object.entries(hash).reduce(
    (acc, [x, count]) => (count > 1 ? acc + +x * count : acc),
    0
  )

  return sum - diff
}
