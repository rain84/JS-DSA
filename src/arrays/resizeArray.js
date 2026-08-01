// TODO: add test coverage

export const resizeArray = (arr, size) => {
	const { length } = arr
	const result = []

	if (size <= length) return arr.slice(0, size)

	let i = ~~(size / length)
	do {
		result.push.apply(result, arr)
	} while (--i)

	i = size % length
	if (i) result.push.apply(result, arr.slice(0, i))

	return result
}

const arr = [...'qwe']
const extendedArr = resizeArray(arr, 10).join('')
console.log('arr', arr.join(''))
console.log(extendedArr, extendedArr, extendedArr.length)
