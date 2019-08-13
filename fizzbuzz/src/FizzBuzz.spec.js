import FizzBuzz from './FizzBuzz'

describe('FizzBuzz.js', () => {
  it('should return number zero', () => {
    const number = 0
    
    const result = FizzBuzz(number)

    expect(result).toBe('0')
  })
})
