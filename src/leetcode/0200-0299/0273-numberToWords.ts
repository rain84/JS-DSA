/**
 * 273. Integer to English Words
 * {@link https://leetcode.com/problems/integer-to-english-words/ | Link}
 *
 * Topics: Math | String | Recursion
 */
export function numberToWords(num: number): string {
  if (num === 0) return 'Zero'

  // prettier-ignore
  const f = (x: number): string => {
    const dict1 = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen',]
    const dict2 = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety',]
    let res = ''

    if (x <= 19) res = dict1[x] ?? ''
    else if (x < 100) res = `${dict2[Math.floor(x / 10)]} ${f(x % 10)}`
    else if (x < 10 ** 3) res = `${dict1[Math.floor(x / 100)]} Hundred ${f(x % 100)}`
    else if (x < 10 ** 6) res = `${f(Math.floor(x / 10 ** 3))} Thousand ${f(x % 10 ** 3)}`
    else if (x < 10 ** 9) res = `${f(Math.floor(x / 10 ** 6))} Million ${f(x % 10 ** 6)}`
    else res = `${f(Math.floor(x / 10 ** 9))} Billion ${f(x % 10 ** 9)}`
    return res.trim()
  }

  return f(num)
}
