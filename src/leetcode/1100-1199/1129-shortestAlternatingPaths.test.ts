import { shortestAlternatingPaths } from './1129-shortestAlternatingPaths'

it('should work 1', () => {
  // prettier-ignore
  expect(shortestAlternatingPaths(3, [[0,1],[1,2]], [])).toMatchObject([0,1,-1])
})

it('should work 2', () => {
  // prettier-ignore
  expect(shortestAlternatingPaths(3, [[0,1]], [[2,1]])).toMatchObject([0,1,-1])
})

it('should work 3', () => {
  // prettier-ignore
  expect(shortestAlternatingPaths(5, [[0,1],[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,1]])).toMatchObject([0,1,2,3,7])
})

it('should work 4', () => {
  // prettier-ignore
  expect(shortestAlternatingPaths(5, [[3,2],[4,1],[1,4],[2,4]], [[2,3],[0,4],[4,3],[4,4],[4,0],[1,0]])).toMatchObject([0,2,-1,-1,1])
})
