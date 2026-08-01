import { unicodeDelimiters } from './regex'

// prettier-ignore
it('should split unicode strings by "space" symbols', () => {
	expect(
		'Проверяющая сторона (WebAuthn Relying Party) — web-сервер — хранит открытый ключ, связанный с аккаунтом пользователя, проверяет корректность подписи своих запросов закрытым ключом, хранящимся в аутентификаторе)'
			.split(unicodeDelimiters)
			.filter(Boolean),
	).toMatchObject([
		'Проверяющая',
		'сторона',
		'WebAuthn',
		'Relying',
		'Party',
		'web',
		'сервер',
		'хранит',
		'открытый',
		'ключ',
		'связанный',
		'с',
		'аккаунтом',
		'пользователя',
		'проверяет',
		'корректность',
		'подписи',
		'своих',
		'запросов',
		'закрытым',
		'ключом',
		'хранящимся',
		'в',
		'аутентификаторе',
	])
})
