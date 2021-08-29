function reverseString(string) {
    let reversed = string.split("");
    reversed.reverse();
    return reversed.join("");
}

module.exports = reverseString;