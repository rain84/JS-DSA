/**
 * 1051. Height Checker
 * {@link https://leetcode.com/problems/height-checker/ | Link}
 */
export function heightChecker2(heights: number[]): number {
  const cnt = Array(101).fill(0)
  for (const i of heights) cnt[i]++

  let res = 0
  for (let j = 1, i = 0; j < 101; j++) {
    while (cnt[j]--)
      if (heights[i++] !== j) {
        res++
      }
  }

  return res
}

export function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b)
  return heights.reduce((acc, v, i) => acc + +(expected[i] !== v), 0)
}
