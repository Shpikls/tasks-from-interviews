const sum = require('./index')

describe('Тестирование Task_04 функция sum', () => {
	test('sum(1, 2)', () => {
		expect(sum(1, 2)).toBe(3)
	})

	test('sum(0, 0)', () => {
		expect(sum(0, 0)).toBe(0)
	})

	test('sum(-455, 356)', () => {
		expect(sum(-455, 356)).toBe(-99)
	})

	test('sum(10, NaN)', () => {
		expect(sum(10, NaN)).toBe(NaN)
	})

	test('sum(\'foo\', \'baz\')', () => {
		expect(sum('foo', 'baz')).toBe('foobaz')
	})

	test('sum(1)(2)', () => {
		expect(sum(1)(2)).toBe(3)
	})

	test('sum(0)(0)', () => {
		expect(sum(0)(0)).toBe(0)
	})

	test('sum(-455)(356)', () => {
		expect(sum(-455)(356)).toBe(-99)
	})

	test('sum(10)(NaN)', () => {
		expect(sum(10)(NaN)).toBe(NaN)
	})

	test('sum(\'foo\')(\'baz\')', () => {
		expect(sum('foo')('baz')).toBe('foobaz')
	})

	test('check return function', () => {
		expect(typeof sum(1)).toEqual(typeof (() => {}))
	})
})