const reverseString = require('./reverse');
const reverse = require('./reverse');

describe("Reverser test", () => {
    test('Should reverse the string', () => {
        expect(reverseString("String here, please reverse me!")).toBe("!em esrever esaelp ,ereh gnirtS");
    });
})