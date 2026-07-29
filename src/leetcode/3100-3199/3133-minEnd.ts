/**
 * {@link https://leetcode.com/problems/minimum-array-end | 3133. Minimum Array End}
 *
 * Topics: Bit Manipulation
 */
export function minEnd(n: number, x: number): number {
  let binaryN = [...(n - 1).toString(2)]
  let binaryX = [...x.toString(2)]
  const res: number[] = []
  const l = Math.max(binaryN.length, binaryX.length)

  if (binaryN.length < l) binaryN = [...binaryN, ...Array(l - binaryN.length).fill('0')]
  if (binaryX.length < l) binaryX = [...binaryX, ...Array(l - binaryX.length).fill('0')]

  for (let i = 0; i < l; i++) {
    res.push(binaryX[i] === '1' ? 1 : +binaryN[i])
  }

  return Number.parseInt(res.join(''), 2)
}

/** Time Limit Exceeded */
export function minEnd2(n: number, x: number): number {
  const y = BigInt(x)
  let res = y

  while (--n) {
    res = (res + 1n) | y
  }

  return Number(res)
}

for (const x of [4, 5, 6]) {
  console.log(x.toString(2))
}

for (const x of [7, 15, 8]) {
  console.log(x.toString(2))
}

console.log([4, 5, 6].reduce((a, b) => a & b))
