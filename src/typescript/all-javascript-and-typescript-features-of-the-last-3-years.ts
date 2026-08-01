// https://betterprogramming.pub/all-javascript-and-typescript-features-of-the-last-3-years-629c57e73e42
import { capitalize } from 'utils/string'

// TypeScript 4.1
// Template Literal Types:
type VerticalDirection = 'top' | 'bottom'
type HorizontalDirection = 'left' | 'right'
type Direction = `${VerticalDirection} ${HorizontalDirection}`
const d: Direction = 'bottom left'

// *****************************************************************************
function makeId<T extends number, U extends number>(first: T, second: U): `${T}-${U}`
function makeId<T extends string, U extends string>(
	first: T,
	second: U,
): `${Capitalize<T>}-${Capitalize<U>}` {
	return `${capitalize(first)}-${capitalize(second)}`
}

// *****************************************************************************
// Key Remapping in Mapped Types
const obj = { value1: 0, value2: 1, value3: 3 }
let newObj: {
	[Property in keyof typeof obj as `_${Property}`]: (typeof obj)[Property]
}

// *****************************************************************************
// Instantiation Expressions
function identity<T>(items: T[]): T[] {
	return items
}

// old way
function makeStringList(text: string[]) {
	return identity(text)
}
makeStringList(['text', 'text 2'])

// new way
const makeNList = identity<number>
const makeSList = identity<string>
identity<number | string>([1, 2, 'hello'])
makeNList([1])
makeSList(['a', 'as'])

// *****************************************************************************
// extends Constraints on infer Type Variables
type FirstOld<T> = T extends [infer S, ...unknown[]] ? (S extends string ? S : never) : never
type A = FirstOld<[string, number]>

type FirstOld2<T1, T2 = string> = T1 extends [T2, ...unknown[]] ? T1[0] : never
// biome-ignore lint/complexity/noBannedTypes: <explanation>
type B = FirstOld2<[Symbol, number, boolean], Symbol>

type FirstNew<T> = T extends [infer S extends string, ...unknown[]] ? S : never
type C = FirstNew<[string, number, boolean]>

// *****************************************************************************
// The satisfies Operator
{
	const obj = {
		fireTruck: [255, 0, 0],
		bush: '#00ff00',
		ocean: [0, 0, 255],
	}
	const rgb1 = obj.fireTruck[0] // typed as number
	const hex = obj.bush // typed as string

	const objOld: Record<string, string | [number, number, number]> = {
		fireTruck: [255, 0, 0],
		bush: '#00ff00',
		ocean: [0, 0, 255],
	}
	const rgb1Old = objOld.fireTruck[0] // typed as string | number
	const hexOld = objOld.bush // typed as string | number

	const objNew = {
		fireTruck: [255, 0, 0],
		bush: '#00ff00',
		ocean: [0, 0, 255],
	} satisfies Record<string, string | [number, number, number]>
	// And we still have the typings of the properties, the array even got more accurate by becoming a tuple.
	const rgb1New = objNew.fireTruck[0] // typed as number
	const hexNew = objNew.bush // typed as string
}
