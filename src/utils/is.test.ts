import { isPOJO } from './is'

it.each`
	prop             | val
	${{}}            | ${true}
	${() => {}}      | ${false}
	${() => {}}      | ${false}
	${/.*/}          | ${false}
	${new Set()}     | ${false}
	${new WeakMap()} | ${false}
`('isPOJO should work', ({ prop, val }) => {
	expect(isPOJO(prop)).toBe(val)
})
