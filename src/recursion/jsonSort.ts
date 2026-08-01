type TJson = {
	[key in string]: TJsonValue
}

type TJsonValue = string | number | boolean | Array<TJson> | TJson

type TEntries<T> = [string, T][]

const sortEntries = <T>(entries: TEntries<T>) =>
	[...entries].sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

const isPOJO = (value: TJsonValue | TJson): value is TJson =>
	Object.prototype.toString.call(value) === '[object Object]'

const identity = <T>(val: TEntries<T>) => val

const jsonTraverse = (json: TJson, transformFn = identity): TJson =>
	Object.fromEntries(
		transformFn(Object.entries(json)).map(([key, value]: [string, TJsonValue]) => [
			key,
			isPOJO(value) ? jsonTraverse(value) : value,
		]),
	)

export const jsonSort = (json: TJson) => jsonTraverse(json, sortEntries)
