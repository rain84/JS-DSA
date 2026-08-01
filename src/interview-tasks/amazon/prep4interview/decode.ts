// Decode the input string into original string.
// You are given an encoded string
// and number of rows, Convert it to original string

// Input: mnesi___ya__k____mime  N = 3

// Output : my name is mike

// Explanation: Read the matrix in a
// diagonal way starting from[0][0] index
// until the end of row and start
// from the top again to decode it.
// _ are treated as space.

// m n e s i _ _
// _ y a _ _ k _
// _ _ _ m i m e

export const decode = (str: string, n: number) => {
	if (!str.length) return ''

	const result = []
	const row = Math.floor(str.length / n)
	let i = 0
	let j = 0
	let index: number

	while ((index = i + j * row + j) < str.length) {
		let ch = str[index]

		if (ch === '_') ch = ' '
		if (++j === n) {
			i++
			j = 0
		}

		result.push(ch)
	}

	return result.join('').trim()
}

const input = 'mnesi___ya__k____mime'
const n = 3
const output = 'my name is mike'

const result = decode(input, n)
console.log('decode(input, n)', result, result === output)
