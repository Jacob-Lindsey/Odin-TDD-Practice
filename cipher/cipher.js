function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char);
}

function isLowerCase(char) {
    return (/[a-z]/).test(char);
}

function getAlphaPos(text) {
    return text.split('');  
}

function caesarEncrypt(text,shift) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cipher = getAlphaPos(text);
    let encrypted = '';

    for (i = 0; i < cipher.length; i++) {
        let ch = cipher[i];
        if (ch) {
            if (isCharacterALetter(ch)) {
                let index = alphabet.findIndex(a => a == ch.toLowerCase());
                let shiftedIndex = index + shift;
                if (isLowerCase(ch)) {
                    if ((index + shift) > 25) {
                        encrypted += alphabet[(shiftedIndex) - 25];
                    } else {
                        encrypted += alphabet[shiftedIndex];
                    }
                } else {
                    if ((index + shift) > 25) {
                        let shiftedLetter = alphabet[shiftedIndex - 25];
                        encrypted += shiftedLetter.toUpperCase();
                    } else {
                        encrypted += alphabet[shiftedIndex].toUpperCase();
                    }
                    
                }
            } else {
                encrypted += ch;
            }
        } else {
            encrypted += " ";
        }
    }

    return encrypted;
}

module.exports = caesarEncrypt;