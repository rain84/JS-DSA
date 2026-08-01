{
	const validAnagramWithMaps = (s1, s2) => {
		if (s1.lenght !== s2.lenght) {
			return false
		}

		const map1 = new Map()
		const map2 = new Map()

		for (const key in s1) {
			const val1 = s1[key]
			const val2 = s2[key]

			map1.set(val1, (map1[val1] || 0) + 1)
			map2.set(val2, (map2[val2] || 0) + 1)
		}

		if (map1.size !== map2.size) {
			return false
		}

		for (const [key, val] of map1) {
			if (map2.get(key) !== val) {
				return false
			}
		}

		return true
	}

	validAnagramWithMaps('anagramanagramanagram', 'marganamarganamargana')
	validAnagramWithMaps('anagramanagramanagram', 'margandmargandmargand')

	const validAnagramWithObjects = (s1, s2) => {
		if (s1.lenght !== s2.lenght) {
			return false
		}

		const lookup = {}

		for (const val of s1) {
			lookup[val] = (lookup[val] || 0) + 1
		}

		for (const val of s2) {
			if (!lookup[val]) return false
			lookup[val]--
		}

		return true
	}

	const testPerfomance = () => {
		let time = performance.now()
		const iterations = 10 ** 2

		for (let i = iterations; i; i--) {
			validAnagramWithObjects('anagramanagramanagram', 'marganamarganamargana')
			validAnagramWithObjects('anagramanagramanagram', 'margandmargandmargand')
		}
		const execTimeValidAnagramWithObjects = (performance.now() - time) / iterations

		time = performance.now()
		for (let i = iterations; i; i--) {
			validAnagramWithMaps('anagramanagramanagram', 'marganamarganamargana')
			validAnagramWithMaps('anagramanagramanagram', 'margandmargandmargand')
		}
		const execTimeValidAnagramWithMaps = (performance.now() - time) / iterations

		console.log(`"validAnagramWithObjects" executed during ${execTimeValidAnagramWithObjects}`)
		console.log(`"validAnagramWithMaps" executed during ${execTimeValidAnagramWithMaps}`)
	}

	testPerfomance()
}
