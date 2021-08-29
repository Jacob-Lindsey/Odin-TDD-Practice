const calculator = require('./calculator');

describe("Calculator test", () => {
    test('Adding 1 + 2 should return 3', () => {
        expect(calculator.add(1,2)).toBe(3);
    });

    test('Subtracting 15 - 9 should return 6', () => {
        expect(calculator.subtract(15,9)).toBe(6);
    });

    test('Multiplying 4 * 7 should return 28', () => {
        expect(calculator.multiply(4,7)).toBe(28);
    });

    test('Dividing 16 / 2 should return 8', () => {
        expect(calculator.divide(16,2)).toBe(8);
    });
})