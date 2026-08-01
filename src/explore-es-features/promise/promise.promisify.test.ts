import { promisify } from './promise'

it('should work', () => {
	expect(promisify(1).constructor).toBe(Promise)
	expect(promisify(Promise.resolve(1)).constructor).toBe(Promise)
})
