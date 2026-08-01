import { getItems } from './findKItemsInArray'

it('should work', () => {
	expect(getItems([1, 23, 12, 9, 30, 2, 50], 3)).toMatchObject([23, 30, 50])
})
