/**
 * 633. Sum of Square Numbers
 * {@link https://leetcode.com/problems/sum-of-square-numbers/ | Link}
 */
export function judgeSquareSum(c: number): boolean {
  let [a, b] = [0, Math.sqrt(c) | 0]

  while (a <= b) {
    const pow = a ** 2 + b ** 2

    if (c === pow) return true
    if (pow < c) a++
    else if (c < pow) b--
  }

  return false
}

/** Increment/decrement instead of exponentiation */
export function judgeSquareSum2(c: number): boolean {
  const half = Math.sqrt(c / 2) | 0
  let a = half - 1
  let b = half + 1
  let increment = a * 2 + 1
  let decrement = b * 2 - 1
  a = a ** 2 + increment
  b = b ** 2 - decrement

  while (0 <= a && b <= c) {
    const pow = a + b

    if (c === pow) return true

    if (pow < c) b += increment += 2
    else if (pow > c) a -= decrement -= 2
  }

  return false
}

export function judgeSquareSum3(c: number): boolean {
  for (let a = 0, inc = -1; a <= c; inc += 2, a += inc) {
    const b = Math.sqrt(c - a)
    if (b === (b | 0)) return true
  }

  return false
}

/** Solved by using Fermat's theorem on sums of two squares */
export function judgeSquareSum4(c: number): boolean {
  const n = Math.sqrt(c)

  for (let i = 2; i <= n; i++) {
    let count = 0

    if (c % i === 0) {
      while (c % i === 0) {
        count++
        c /= i
      }
      if (i % 4 === 3 && count % 2 !== 0) return false
    }
  }
  return c % 4 !== 3
}
