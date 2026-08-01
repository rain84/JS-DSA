import { max_path_sum } from './max_path_sum.js'
import { arr } from './input-2.js'

it('should work', () => {
	expect(max_path_sum([2, 7], [7, 8])).toBe(17)
	expect(max_path_sum([2, 3, 7, 10, 12], [1, 5, 7, 8])).toBe(35)
	expect(max_path_sum([1, 2, 3], [3, 4, 5])).toBe(15)
})

it('should work with a large arrays', () => {
	expect(max_path_sum(arr.a, arr.b)).toBe(503008440)
})
