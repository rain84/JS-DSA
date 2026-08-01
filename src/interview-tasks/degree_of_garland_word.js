{
	// Слова "гирляды"
	// Найдите "степень" слова-гирлянды. Степень - количество букв,
	// одинаковых в начале строки и в конце строки.
	// Например:
	// В слове "onion" в начале и в конце слова совпадают 2 буквы. Степень - 2.
	// В слове "codenrock" нет совпадений букв в начале и конце слова. Степень - 0
	// А в слове "undergrounder" таких букв 5.

	const getDegreeOfGarlandWord = (word) => {
		let degree = 0
		let i = 0
		const max = ~~(word.length / 2)

		while (i++ < max) {
			if (word.slice(0, i) === word.slice(-i)) {
				degree = i
			}
		}

		return degree
	}

	console.log('onion', getDegreeOfGarlandWord('onion'))
	console.log('codenrock', getDegreeOfGarlandWord('codenrock'))
	console.log('undergrounder', getDegreeOfGarlandWord('undergrounder'))
}
