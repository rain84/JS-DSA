import { ArrayWrapper } from './2695-ArrayWrapper'

it('should work 1', () => {
	const obj1 = new ArrayWrapper([1, 2])
	const obj2 = new ArrayWrapper([3, 4])

	expect(+obj1 + +obj2).toBe(10)
	expect(String(obj1)).toBe('[1,2]')
	expect(String(obj2)).toBe('[3,4]')
})
