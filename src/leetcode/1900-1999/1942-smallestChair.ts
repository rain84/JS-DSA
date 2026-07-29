import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * {@link https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair | 1942. The Number of the Smallest Unoccupied Chair}
 *
 * Topics: Array | Hash Table | Heap (Priority Queue)
 */
export function smallestChair(times: number[][], targetFriend: number): number {
	const [c, res] = [0, 0]
	const friends = times.map((x, i) => (x.push(i), x))
	const minPQArrival = new MinPriorityQueue<number[]>({ priority: ([x]) => x })
	const minPQLeaving = new MinPriorityQueue<number[]>({ priority: ([_, x]) => x })

	// [ [ 3, 10, 0 ], [ 1, 5, 1 ], [ 2, 6, 2 ] ]
	friends

	for (const x of friends) {
		minPQArrival.enqueue(x)
		minPQLeaving.enqueue(x)
	}

	const arr1: number[][] = []
	const arr2: number[][] = []
	// [ [ 1, 5, 1 ], [ 2, 6, 2 ], [ 3, 10, 0 ] ]
	// while (!minPQArrival.isEmpty()) {
	//   const [_, __, friend] = minPQArrival.dequeue().element
	// }

	// [ [ 1, 5, 1 ], [ 2, 6, 2 ], [ 3, 10, 0 ] ]
	// [ [ 2, 3, 1 ], [ 1, 4, 0 ], [ 4, 6, 2 ] ]
	while (!minPQArrival.isEmpty()) {}

	console.log(arr1)
	console.log(arr2)

	// for (let i = 0; i < friends.length; i++) {
	//   const [arrival, leaving, friend] = friends[i]

	//   if (minPQSeats.front()?.priority === i) {
	//     const seat = minPQSeats.dequeue().element
	//     minPQSFreeSeats.enqueue(seat)
	//   }

	//   const seat = minPQSFreeSeats.isEmpty() ? c++ : minPQSFreeSeats.dequeue().element

	//   if (friend === targetFriend) {
	//     res = seat
	//     break
	//   }
	//   minPQSeats.enqueue(seat, leaving)
	// }

	return res
}

// const res = smallestChair(
//   [
//     [1, 4],
//     [2, 3],
//     [4, 6],
//   ],
//   1
// )

const res = smallestChair(
	[
		[3, 10],
		[1, 5],
		[2, 6],
	],
	0,
)

console.log(res)

export function smallestChair2(times: number[][], targetFriend: number): number {
	let [c, res] = [0, 0]
	const minPQSeats = new MinPriorityQueue<number>()
	const minPQFreeSeats = new MinPriorityQueue<number>()
	const friends = times.map((x, i) => (x.push(i), x)).sort(([a], [b]) => a - b)

	friends
	for (let i = 0; i < friends.length; i++) {
		const [arrival, leaving, friend] = friends[i]

		if (minPQSeats.front()?.priority === i) {
			const seat = minPQSeats.dequeue().element
			minPQFreeSeats.enqueue(seat)
		}

		const seat = minPQFreeSeats.isEmpty() ? c++ : minPQFreeSeats.dequeue().element

		if (friend === targetFriend) {
			res = seat
			break
		}
		minPQSeats.enqueue(seat, leaving)
	}

	return res
}
export function smallestChair3(times: number[][], t: number): number {
	const leavingTime = new Array(times.length).fill(-1)
	const friend = times[t][0]

	times.sort((a, b) => a[0] - b[0])

	for (const [x, y] of times) {
		let i = 0
		while (leavingTime[i] > x && leavingTime[i] !== -1) i++

		if (x === friend) return i
		leavingTime[i] = y
	}

	return -1
}
