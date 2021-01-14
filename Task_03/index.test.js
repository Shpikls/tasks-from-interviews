const solution = require('./index')

describe('Test of Task_03', () => {
	test('basic test', () => {
		expect(solution(10)).toBe(23)
	})

	test('argument -1', () => {
		expect(solution(-1)).toBe(0)
	})

	test('argument 0', () => {
		expect(solution(0)).toBe(0)
	})

	test('argument NaN', () => {
		expect(solution(NaN)).toBe(0)
	})

	test('argument 100', () => {
		expect(solution(100)).toBe(2318)
	})

	test('argument 3', () => {
		expect(solution(4)).toBe(3)
	})

	test('argument 5', () => {
		expect(solution(6)).toBe(8)
	})

	test('argument false', () => {
		expect(solution(false)).toBe(0)
	})

	test('argument undefined', () => {
		expect(solution()).toBe(0)
	})
})