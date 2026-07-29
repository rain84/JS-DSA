import { minMutation } from './0433-minMutation'

it('should work 1', () => {
  const startGene = 'AACCGGTT'
  const endGene = 'AACCGGTA'
  const bank = ['AACCGGTA']
  expect(minMutation(startGene, endGene, bank)).toBe(1)
})

it('should work 2', () => {
  const startGene = 'AACCGGTT'
  const endGene = 'AAACGGTA'
  const bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']
  expect(minMutation(startGene, endGene, bank)).toBe(2)
})

it('should work 3', () => {
  const startGene = 'AACCTTGG'
  const endGene = 'AATTCCGG'
  const bank = ['AATTCCGG', 'AACCTGGG', 'AACCCCGG', 'AACCTACC']
  expect(minMutation(startGene, endGene, bank)).toBe(-1)
})
