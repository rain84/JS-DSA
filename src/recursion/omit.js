/**
 *  Omit prop or array of props from object
 *  throw the recursion
 */

const omit = (props, obj) => {
	if (typeof props === 'string') {
		const { [props]: _, ...rest } = obj
		return rest
	}

	if (Array.isArray(props)) {
		return props.reduce((acc, prop) => omit(prop, acc), obj)
	}

	throw new Error()
}

const prop = 'a'
const props = [...'abcd']

const obj = Object.fromEntries([...[...'abcdef'].entries()].map(([key, val]) => [val, key]))

console.log('obj', obj)

const omittedProp = omit(prop, obj)
console.log('omittedProp', omittedProp)

const omittedProps = omit(props, obj)
console.log('omittedProps', omittedProps)
