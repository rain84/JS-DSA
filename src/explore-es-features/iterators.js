{
	// implementation of iterator protocol for class members
	class Human {
		name = 'Мария'
		patronymic = 'Николаевна'
		surname = 'Семёнова';
		[Symbol.iterator]() {
			let count = 0
			const fields = Object.getOwnPropertyNames(this).filter((prop) => typeof prop !== 'function')

			return {
				next: () => {
					const field = fields[count++]
					return {
						value: [field, this[field]],
						done: fields.length < count,
					}
				},
			}
		}
	}

	class Human2 {
		name = 'Виктор'
		patronymic = 'Андреевич'
		surname = 'Симонов';

		*[Symbol.iterator]() {
			let count = 0
			const fields = Object.getOwnPropertyNames(this).filter((prop) => typeof prop !== 'function')

			while (count < fields.length) {
				const field = fields[count++]
				yield [field, this[field]]
			}
		}
	}

	console.log([...new Human()])
	console.log([...new Human2()])
}
