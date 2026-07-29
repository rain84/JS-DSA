import { maxNumberOfBalloons } from './1189-maxNumberOfBalloons'

it('should work 1', () => {
  const s = 'nlaebolko'
  expect(maxNumberOfBalloons(s)).toBe(1)
})

it('should work 2', () => {
  const s = 'loonbalxballpoon'
  expect(maxNumberOfBalloons(s)).toBe(2)
})

it('should work 3', () => {
  const s = 'leetcode'
  expect(maxNumberOfBalloons(s)).toBe(0)
})

it('should work 4', () => {
  const s = 'balllllllllllloooooooooon'
  expect(maxNumberOfBalloons(s)).toBe(1)
})

it('should work 5', () => {
  const s =
    'krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw'
  expect(maxNumberOfBalloons(s)).toBe(10)
})
