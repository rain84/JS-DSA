/**
 * {@link https://leetcode.com/problems/minimize-xor | 2429. Minimize XOR}
 *
 * Topics: Greedy | Bit Manipulation
 */
export function minimizeXor(num1: number, num2: number): number {
  const getC = (x: number) => {
    let c = 0
    while (x) {
      c += x & 1
      x >>>= 1
    }
    return c
  }

  const [c1, c2] = [getC(num1), getC(num2)]
  const arr = [...num1.toString(2)].map(Number)

  if (c1 === c2) return num1

  let c = Math.abs(c1 - c2)
  arr.reverse()

  for (let i = 0; c; i++) {
    if (c1 > c2 && arr[i]) {
      arr[i] = 0
      c--
    }

    if (c1 < c2 && !arr[i]) {
      arr[i] = 1
      c--
    }
  }

  arr.reverse()
  const res = Number.parseInt(arr.join(''), 2)

  return res
}
