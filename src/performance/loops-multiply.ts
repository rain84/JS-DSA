import { random } from 'utils/array'
import { perf } from '../utils/perf'

const for_loop = (arr: number[]) => {
  let [res, n] = [1, arr.length]

  for (let i = 0; i < n; i++) {
    res *= arr[i]
  }

  return res
}

const for_while = (arr: number[]) => {
  let [res, n] = [1, arr.length]

  while (n--) {
    res *= arr[n]
  }

  return res
}

const for_of_loop = (arr: number[]) => {
  let res = 1
  for (const val of arr) {
    res *= val
  }
  return res
}

const reduce_loop = (arr: number[]) => arr.reduce((a, b) => a * b)

const arr = random(10 ** 3, 10 ** 4)
perf([for_loop, for_while, reduce_loop, for_of_loop], arr)
