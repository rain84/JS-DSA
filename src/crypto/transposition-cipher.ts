type GetCipher = (key: string) => Cipher
type GetColumn = (arr: string[], keyword: string, column_position: number) => string[]
type GetRow = (arr: string[], keyword: string, row_position: number) => string[]

interface Map {
	[key: string]: number
}

interface Cipher {
	encode: number[]
	decode: number[]
}

export const encode = (message: string, keyword: string): string => {
	const cipher = getCipher(keyword).encode
	const lenght = {
		row: keyword.length,
		column: -1,
	}
	const encodedMatrix = []
	const result: string[] = []

	message = withoutSpaces(message)

	// making encoded as linear array
	for (let i = 0; i < message.length; i++) {
		const indexInRing = i % lenght.row

		if (indexInRing === 0) {
			lenght.column++
		}

		const idx = lenght.column * lenght.row + cipher[indexInRing]
		encodedMatrix[idx] = message[i]
	}

	// going through encoded array and copy by columns
	for (let i = 0; i < lenght.row; i++) {
		const column = getColumn(encodedMatrix, keyword, i)
		result.push.apply(result, column)
	}

	return result.join('')
}

export const decode = (message: string, keyword: string): string => {
	const lenght = {
		row: keyword.length,
		column: ~~(message.length / keyword.length),
	}

	const messageAsArray = [...message]
	const decodedMatrix: string[] = []

	for (let i = 0; i < lenght.column; i++) {
		const row = getRow(messageAsArray, keyword, i)
		decodedMatrix.push.apply(decodedMatrix, row)
	}

	const cipher = getCipher(keyword).decode
	const result: string[] = []

	for (let i = 0, j = 0; i < decodedMatrix.length; i++) {
		const indexInRing = i % lenght.row

		if (indexInRing === 0) {
			j++
		}

		const idx = j * lenght.row + cipher[indexInRing]
		result[idx] = decodedMatrix[i]
	}

	return result.join('')
}

export const getColumn: GetColumn = (arr, { length }, column_position) => {
	const result = []
	let i = column_position

	do {
		if (arr[i] === undefined) break
		result.push(arr[i])

		i += length
	} while (i < arr.length)

	return result
}

export const getRow: GetRow = (arr, { length }, row_position) => {
	const result = []
	const height = ~~(arr.length / length)
	let i = row_position

	do {
		if (arr[i] === undefined) break
		result.push(arr[i])
		i += height
	} while (i < arr.length)

	return result
}

export const getCipher: GetCipher = (key) => {
	const keyAsArray = [...key.toLocaleLowerCase()]

	const sortedKey = [...keyAsArray]
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.reduce<Map>((acc, val, idx) => {
			acc[val] = idx
			return acc
		}, {})

	const cipher: Cipher = {
		encode: [],
		decode: [],
	}

	keyAsArray.forEach((ch, i) => {
		const idx = sortedKey[ch]

		cipher.encode.push(idx)
		cipher.decode[idx] = i
	})

	return cipher
}

export const withoutSpaces = (str: string): string => str.replaceAll(/\s+/g, '')
