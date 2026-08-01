type HasNames = { names: readonly string[] }

function getNamesExactlyOld<T extends HasNames>(arg: T): T['names'] {
	return arg.names
}

function getNamesExactlyNew<const T extends HasNames>(arg: T): T['names'] {
	return arg.names
}

//    string[]
const names1 = getNamesExactlyOld({ names: ['Alice', 'Bob', 'Eve'] })

// Correctly gets what we wanted:
//    readonly ["Alice", "Bob", "Eve"]
const names2 = getNamesExactlyNew({ names: ['Alice', 'Bob', 'Eve'] })

declare function fnBad<T extends readonly string[]>(args: T): void
// 'T' is still 'string[]' since 'readonly ["a", "b", "c"]' is not assignable to 'string[]'
fnBad(['a', 'b', 'c'])

declare function fnGood<const T extends readonly string[]>(args: T): void
// T is readonly ["a", "b", "c"]
fnGood(['a', 'b', 'c'])
