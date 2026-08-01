/* 
  Inspired by the article
  "WHAT’S SO GREAT ABOUT FUNCTIONAL PROGRAMMING ANYWAY?"
  
  https://jrsinclair.com/articles/2022/whats-so-great-about-functional-programming-anyway
*/

// const Task = (run) => ({
// 	map: (f) =>
// 		Task((resolve, reject) => {
// 			run((x) => resolve(f(x)), reject)
// 		}),

// 	peekErr: (f) =>
// 		Task((resolve, reject) => {
// 			run(resolve, (err) => {
// 				f(err)
// 				reject(err)
// 			})
// 		}),

// 	run: (onResolve, onReject) => run(onResolve, onReject)
// })

// const run = (res, rej) => {
// 	const data = 42
// 	res(data)
// }

// const res = (x) => x
// const rej = (x) => {
// 	throw new Error(x)
// }

// Task(run).run(res, rej)
// Task(run).map(f).run(res, rej)

// biome-ignore lint:
export type Cb<T> = (val: T) => any
// biome-ignore lint:
type IRun<T> = (res: Cb<T>, rej: Cb<T>) => any
type Id<T = number> = (x: T) => T

const identity: Id = (x) => x

const Task = <T extends number>(run: IRun<T>) => ({
	map: (f: Id<T>) => Task((res, rej) => run((x) => f(res(x)), rej)),
	run: (res: Cb<T>, rej: Cb<T>) => run(res, rej),
})

const run: IRun<number> = (res, rej) => {
	const data = 42
	return res(data)
}

const log = (info: string) => (val: number) => {
	console.log(`${info}: ${++val}`)
	return val
}

console.clear()
//	prettier-ignore
const res = Task(run).map(log('1')).map(log('2')).run(log('run'), identity)

console.log(res)
