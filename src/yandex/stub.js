const fs = require('node:fs')
const fileContent = fs.readFileSync('input.txt', 'utf8')
const args = fileContent.trim().split('\n')
const result = solution(args)
fs.writeFileSync('output.txt', result.toString())

/**
 * {@param {string[]} args - list of strokes}
 */
function solution(args) {
	return args
}
