export const unique = (arr: number[]): number[] => [...new Set(arr)]

interface Obj {
	[anyProp: string]: number
}

export const unique2 = (arr: number[]): number[] =>
	Object.values(
		arr.reduce((acc: Obj, val: number): Obj => {
			acc[val] = val
			return acc
		}, {}),
	).map(Number)

const data = [1, 1, 2, 2, 4, 2, 3, 7, 3]
console.log(unique(data))
console.log(unique2(data))
