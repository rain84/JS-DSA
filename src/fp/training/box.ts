/* 
  Inspired by the article
  "WHAT’S SO GREAT ABOUT FUNCTIONAL PROGRAMMING ANYWAY?"
  
  https://jrsinclair.com/articles/2022/whats-so-great-about-functional-programming-anyway
*/

type Id<T = number> = (x: T) => T

const identity: Id = (x) => x
const log = (info: string) => (x: string) => {
	console.log(`${info}: ${x}`)
	return x
}

const box = (run = identity) => {
	const res = (x: number) => run(x)
	res.map = (f: Id) => box((x) => f(run(x)))
	return res
}

const add1: Id = (x) => x + 1
const mult10 = (x: number) => x * 10

const data = 0

//  prettier-ignore
const res = box()
	.map(add1)
	.map(mult10)
	.map(add1)
	.map(add1)
	.map(add1)
	.map(add1)
	.map(add1)
	.map(mult10)

console.log(res(data))
