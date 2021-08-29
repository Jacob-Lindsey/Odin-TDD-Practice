const capitalize = require('./capitalize');

describe("Capitalizer test", () => {
    test('Works with lowercase string', () => {
        expect(capitalize("i am a string")).toBe("I am a string");
    });

    test('Works with already capitalized string', () => {
        expect(capitalize("I am ALSO a string!")).toBe("I am ALSO a string!");
    });
})