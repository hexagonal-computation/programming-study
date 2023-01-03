import { all, any } from './array'

describe('all', () => {
  test('success', () => {
    const result = all([2, 4, 6, 8], (e) => e % 2 === 0)
    expect(result).toEqual(true)
  })
  test('fail', () => {
    const result = all([3, 6, 9, 12, 17], (e) => e % 3 === 0)
    expect(result).toEqual(false)
  })
})

describe('any', () => {
  test('success', () => {
    const result = any([2, 4, 6, 8], (e) => e % 4 === 0)
    expect(result).toEqual(true)
  })
  test('fail', () => {
    const result = all([3, 6, 9, 12, 17], (e) => e % 5 === 0)
    expect(result).toEqual(false)
  })
})
