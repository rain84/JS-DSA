import { bubbleSort, bubbleSort2 } from './bubbleSort'

it('should work', () => {
	const array = [72, 99, 84, 95, 22, 54, 66, 80, 21, 5]

	expect(bubbleSort([...array])).toEqual([5, 21, 22, 54, 66, 72, 80, 84, 95, 99])
	expect(bubbleSort2([...array])).toEqual([5, 21, 22, 54, 66, 72, 80, 84, 95, 99])
})
