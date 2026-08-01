import { compress, decompress } from './stringCompression'

it('should compress', () => {
	expect(compress('aaaabbbcccd')).toBe('4a3b3cd')
})
it('should decompress', () => {
	expect(decompress('4a3b3cd')).toBe('aaaabbbcccd')
})
