const analyze = require('./array');

describe("Array analysis test", () => {
    test('Works with a string without punctuation, shifted 3 places', () => {
        expect(analyze([1,2,3,4,5,6,7,8,9])).toStrictEqual({"average": 5,"length": 9,"max": 9,"min": 1});
    });
})