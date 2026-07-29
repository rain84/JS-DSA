/**
 * {@link https://leetcode.com/problems/find-the-closest-palindrome/ | 564. Find the Closest Palindrome}
 *
 * Topics: Math | String
 */
export function nearestPalindromic(n: string): string {
  const num = +n

  if (num < 10) return String(num - 1)

  const isOdd = n.length % 2
  const mid = n.length >> 1
  const half = n.slice(0, mid + isOdd)
  const res: number[] = []

  res.push(+mirror(half, isOdd))

  let next = String(+half + 1)
  if (isOdd) {
    res.push(+mirror(next.slice(0, next.length - 1)))
  } else {
    res.push(+mirror(next, 1))
  }

  // 1001   10001
  //  999    9999
  //   99      99
  //  100     100

  res

  return String(Math.min(...res))
}

console.log(nearestPalindromic('9999'))
console.log(nearestPalindromic('999'))
// console.log(nearestPalindromic('1234'))

function palindromeFromLeftHalf(num: number[]) {
  const middle = num.length >> 1
  for (let i = 0, l = num.length; i < middle; i++) {
    num[l - i - 1] = num[i]
  }
  return num
}
function mirror(s: string, isOdd = 0) {
  const n = s.length * 2 + Number(isOdd)
  return s + [...s].reverse().slice(isOdd).join('')
}

function toNumber(num: number[]) {
  return Number(num.join(''))
}

console.log(mirror('123'))
console.log(mirror('123', 1))
