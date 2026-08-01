const isArray = <T>(val: T) => Array.isArray(val)
const isObject = <T>(val: T) => val?.constructor === Object
const isPromise = <T>(val: T) => val?.constructor === Promise

type TObject<T> = {
	[K in string | number | symbol]: T | TObject<T> | TArray<T>
}
type TArray<T> = Array<T | TArray<T> | TObject<T>>

export const promiseHash = async <T>(obj: TObject<T>) => {
	const result: TObject<T> = {}

	for (const prop in obj) {
		let val = obj[prop]

		if (isObject(val)) val = await promiseHash(val as TObject<T>)
		if (isArray(val)) val = Object.values(await promiseHash(val as TObject<T>))
		else if (isPromise(val)) val = await val

		result[prop] = val
	}

	return result
}
