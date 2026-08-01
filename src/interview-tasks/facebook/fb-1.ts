/* 
Given a 2-D matrix representing an image, 
a location of a pixel in the screen and a color C, 
replace the color of the given pixel 
and all adjacent same colored pixels with C.

For example, given the following matrix, 
and location pixel of (2, 2), and 'G' for green:

B B W
W W W
W W W
B B B

Becomes:

B B G
G G G
G G G
B B B
*/

const input = `
B B W
W W W
W W W
B B B
`

type TMatrix2d = string[][]

export class Matrix {
	matrix: TMatrix2d

	constructor(str: string) {
		this.matrix = Matrix.read(str)
	}

	static read(str: string): TMatrix2d {
		return str
			.trim()
			.split('\n')
			.map((line) => line.split(/\s+/))
	}

	toString(): string {
		return this?.matrix?.map((line) => line.join(' ')).join('\n') || ''
	}

	adjaceAt(x: number, y: number, color: string): void {
		this.adjaceAt2(x, y, color)
	}

	private adjaceAt2(x: number, y: number, color: string, prevColor?: string): void {
		if (!this?.matrix?.[y]?.[x]) return
		if (!prevColor) prevColor = this.matrix[y][x]
		if (this.matrix[y][x] !== prevColor) return

		this.matrix[y][x] = color

		this.adjaceAt2(x - 1, y - 1, color, prevColor)
		this.adjaceAt2(x, y - 1, color, prevColor)
		this.adjaceAt2(x + 1, y - 1, color, prevColor)
		this.adjaceAt2(x + 1, y, color, prevColor)
		this.adjaceAt2(x + 1, y + 1, color, prevColor)
		this.adjaceAt2(x, y + 1, color, prevColor)
		this.adjaceAt2(x - 1, y + 1, color, prevColor)
		this.adjaceAt2(x - 1, y, color, prevColor)
	}
}

const matrix = new Matrix(input)
console.log(matrix.toString())
console.log('\n')

matrix.adjaceAt(2, 2, 'G')
console.log(matrix.toString())
