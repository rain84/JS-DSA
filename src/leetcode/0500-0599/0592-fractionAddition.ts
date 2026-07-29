/**
 * {@link https://leetcode.com/problems/fraction-addition-and-subtraction/ | 592. Fraction Addition and Subtraction}
 */
export function fractionAddition(expression: string): string {
  const fractions = expression
    .match(/([\+|\-]?\d+\/\d+)/g)!
    .map((x) => x.split('/').map((x) => Number.parseInt(x)))

  const denominators = [...new Set(fractions.map(([_, x]) => x))]
  const max = Math.max(...denominators)
  let commonDenominator = max

  while (denominators.some((x) => commonDenominator % x)) {
    commonDenominator += max
  }

  let res = 0
  for (const [x, div] of fractions) {
    res += x * (commonDenominator / div)
  }

  if (!res) return '0/1'

  for (let i = 2; i <= Math.min(Math.abs(res), Math.abs(commonDenominator)); i++) {
    while (res % i === 0 && commonDenominator % i === 0) {
      res /= i
      commonDenominator /= i
    }
  }

  return `${res}/${commonDenominator}`
}
