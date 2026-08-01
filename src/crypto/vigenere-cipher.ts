type CryptoFn = (iMessage: number, iKeyword: number, length: number) => number

interface Algorithm {
	encode: CryptoFn
	decode: CryptoFn
}
const crypto: Algorithm = {
	encode: (iMessage, iKeyword, length) => (iMessage + iKeyword) % length,
	decode: (iMessage, iKeyword, length) => (iMessage - iKeyword + length) % length,
}

export const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

const execute =
	(cryptoFn: CryptoFn) =>
	(alphabet: string) =>
	(message: string, keyword: string): string => {
		alphabet = alphabet.toLocaleLowerCase()
		message = message.toLocaleLowerCase()
		keyword = keyword.toLocaleLowerCase()

		const result = []

		const ch = {
			message: '',
			keyword: '',
		}

		const index = {
			message: -1,
			keyword: -1,
			result: -1,
		}

		for (let i = 0; i < message.length; i++) {
			ch.message = message[i]
			ch.keyword = keyword[i % keyword.length]

			index.keyword = alphabet.indexOf(ch.keyword)
			index.message = alphabet.indexOf(ch.message)

			if (index.keyword === -1)
				throw new Error(`Symbol "${ch.keyword}" in keyword is not valid for alphabet`)
			if (index.message === -1)
				throw new Error(`Symbol "${ch.message}" in message is not valid for alphabet`)

			index.result = cryptoFn(index.message, index.keyword, alphabet.length)

			result.push(alphabet[index.result])
		}

		return result.join('')
	}

export const encode = execute(crypto.encode)
export const decode = execute(crypto.decode)
