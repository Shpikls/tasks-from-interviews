const { setCallsYes } = require('./index.js');
describe( 'Тестирвоание функции setCallsYes', () => {
	test('Положительное целое чило', () => {
		const callYes = setCallsYes(2)

		expect(callYes()).toBe('Yes')
		expect(callYes()).toBe('Yes')
		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
	})

	test('Отрицательное число', () => {
		const callYes = setCallsYes(-2)

		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
	})

	test('NaN', () => {
		const callYes = setCallsYes(NaN)

		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
	})

	test('Дробное число', () => {
		const callYes = setCallsYes(0.25)

		expect(callYes()).toBe('Yes')
		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
		expect(callYes()).toBe('No')
	})
})
