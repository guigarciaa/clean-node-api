import hello from './hello'

describe('Test Function', () => {
  test('Teste function hello', () => {
    expect(hello()).toBe('Hello')
  })
})
