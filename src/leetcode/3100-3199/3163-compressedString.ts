/**
 * {@link https://leetcode.com/problems/string-compression-iii | 3163. String Compression III}
 *
 * Topics: String
 */
export function compressedString(word: string): string {
  let res = ''

  for (let i = 1, j = 0; i <= word.length; i++) {
    if (word[i] !== word[j] || i - j === 9) {
      res += i - j + word[j]
      j = i
    }
  }

  return res
}

export function compressedString2(word: string): string {
  const regex = /(.)\1{0,8}/g
  let m: RegExpMatchArray | null = null
  let res = ''

  while ((m = regex.exec(word))) {
    res += m[0].length + m[1]
  }

  return res
}
