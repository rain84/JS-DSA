import { encode } from './feistel-cipher'

// Feistel network
it.skip('should encode with data', () => {
	expect(encode(100, 200)).toMatchObject([203, 99])
})
