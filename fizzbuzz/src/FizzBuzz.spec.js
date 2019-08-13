import FizzBuzz from './FizzBuzz'

describe('FizzBuzz.js', () => {
  it.only('should return number zero', () => {
    const number = 0
    
    const result = FizzBuzz(number)

    expect(result).toBe('0')
  })
  
  it('should return number one', () => {
    const number = 1
    
    const result = FizzBuzz(number)

    expect(result).toBe('1')
  })

  it('should return number two', () => {
    const number = 2
    
    const result = FizzBuzz(number)

    expect(result).toBe('2')
  })

  it('should return Fizz when the number is three', () => {
    const number = 3
    
    const result = FizzBuzz(number)

    expect(result).toBe('Fizz')
  })

  it('should return Buzz when the number is five', () => {
    const number = 5
    
    const result = FizzBuzz(number)

    expect(result).toBe('Buzz')
  })

  it('should return Fizz when the number is divisible by three', () => {
    const number = 9
    
    const result = FizzBuzz(number)

    expect(result).toBe('Fizz')
  })

  it('should return Buzz when the number is divisible by five', () => {
    const number = 25
    
    const result = FizzBuzz(number)

    expect(result).toBe('Buzz')
  })

  it('should return FizzBuzz when the number is divisible by three and five', () => {
    const number = 15
    
    const result = FizzBuzz(number)

    expect(result).toBe('FizzBuzz')
  })
})
