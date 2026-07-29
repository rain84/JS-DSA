// https://leetcode.com/problems/sequential-digits/

// An integer has sequential digits
// if and only if each digit in the number
// is one more than the previous digit.

// Return a sorted list of all the integers
// in the range[low, high]
// inclusive that have sequential digits.

export const nextSequential = (n: number) => {
  if (n < 10 || 10 ** 9 < n) return

  const str = n.toString()
  let digit = +str.at(0)!

  const sequence1: number[] = []
  const sequence2: number[] = []
  const sequence3: number[] = []

  for (let i = 0, digit2 = digit + 1; i < str.length; i++, digit++, digit2++) {
    if (digit < 10) sequence1.push(digit)
    if (digit2 < 10) sequence2.push(digit2)
    sequence3.push(i + 1)
  }
  sequence3.push(sequence3.at(-1)! + 1)

  const result = {
    sequence1: +sequence1.join(''),
    sequence2: +sequence2.join(''),
    sequence3: +sequence3.join(''),
  }

  if (n <= result.sequence1) return result.sequence1
  if (n <= result.sequence2) return result.sequence2

  return result.sequence3
}

export const getSequentialDigits = (min: number, max: number) => {
  const result: number[] = []

  if (min >= max) return result

  let sequence = min

  while ((sequence = nextSequential(sequence)!) <= max) result.push(sequence++)

  return result
}
