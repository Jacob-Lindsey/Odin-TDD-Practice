const caesarEncrypt = require('./cipher');

describe("Caesar shift test", () => {
    test('Works with a string without punctuation, shifted 3 places', () => {
        expect(caesarEncrypt("I am a string", 3)).toBe("L dp d vwulqj");
    });

    test('Works with a string with punctuation, shifted 3 places', () => {
        expect(caesarEncrypt("I am a string!", 3)).toBe("L dp d vwulqj!");
    });

    test('Works with pseudorandomized characters, shifted 24 places', () => {
        expect(caesarEncrypt(".. -_=- HhAaLl234 ..-`=", 24)).toBe(".. -_=- GgYyKk234 ..-`=");
    });
})