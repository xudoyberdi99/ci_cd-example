// math.test.js
const { sum, multiply, divide } = require('./math')

test('ikki sonni qo‘shadi', () => {
	expect(sum(2, 3)).toBe(5)
})

test('ikki sonni ko‘paytiradi', () => {
	expect(multiply(4, 5)).toBe(20)
})

test('bo‘lishni to‘g‘ri bajaradi', () => {
	expect(divide(10, 2)).toBe(5)
})

test('nolga bo‘lish xatolik chiqaradi', () => {
	expect(() => divide(10, 0)).toThrow('Zero bilan bo‘lish mumkin emas!')
})
