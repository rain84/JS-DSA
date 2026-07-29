/**
 * 1710. Maximum Units on a Truck
 * {@link https://leetcode.com/problems/maximum-units-on-a-truck/ | Link}
 */
export function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort(([_, a], [__, b]) => b - a)
  let res = 0

  for (const [box, units] of boxTypes) {
    res += Math.min(truckSize, box) * units
    truckSize -= box
    if (truckSize < 0) break
  }

  return res
}
