let counter = 0
console.log('here')

try {
	;(function stack() {
		counter++
		stack()
	})()
} catch (error) {
	console.log(`stack depth: ${counter}`)
}
