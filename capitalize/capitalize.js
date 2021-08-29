function capitalize(string) {
    let transform = string.split("");
    transform[0] = transform[0].toUpperCase();
    return transform.join("");
}

module.exports = capitalize;
