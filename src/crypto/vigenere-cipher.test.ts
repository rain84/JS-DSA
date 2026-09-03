import { alphabet, decode, encode } from './vigenere-cipher'

const keyword = 'шифр'
const message = 'ЭТОСООБЩЕНИЕНУЖНОЗАКОДИРОВАТЬ'.toLocaleLowerCase()
const encodedMessage = 'хыгвжчхйэцэхёьыюжрфыжмэбжкфгф'

// Poly-alphabet "Vigenere"-cipher
it('should encode', () => {
	expect(encode(alphabet)(message, keyword)).toBe(encodedMessage)
})

it('should decode', () => {
	expect(decode(alphabet)(encodedMessage, keyword)).toBe(message)
})

it('should just work', () => {
	expect(decode(alphabet)(encode(alphabet)(message, keyword), keyword)).toBe(message)
})
