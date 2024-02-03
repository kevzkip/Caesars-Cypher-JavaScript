const readline = require('readline');

function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);

        // Check if the character is a letter
        if (/[a-zA-Z]/.test(char)) {
            let base = char === char.toUpperCase() ? 'A' : 'a';

            // Apply the Caesar Cipher formula for letters
            result += String.fromCharCode((char.charCodeAt(0) - base.charCodeAt(0) + shift + 26) % 26 + base.charCodeAt(0));
        }
        // Check if the character is a digit
        else if (/[0-9]/.test(char)) {
            // Apply the Caesar Cipher formula for the digits
            result += String.fromCharCode((char.charCodeAt(0) - '0'.charCodeAt(0) - shift + 10) % 10 + '0'.charCodeAt(0));
        }
        // Preserve non-alphabetic and non-digit characters
        else {
            result += char;
        }
    }

    return result;
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the text to encrypt: ", (inputText) => {
        rl.question("Enter the shift value: ", (shiftValue) => {
            shiftValue = parseInt(shiftValue);

            // Encrypt the text using the Caesar Cipher
            let encryptedText = caesarCipher(inputText, shiftValue);
            console.log("Encrypted Text:", encryptedText);

            // Decrypt the text using the same shift
            let decryptedText = caesarCipher(encryptedText, -shiftValue);
            console.log("Decrypted Text:", decryptedText);

            rl.close();
        });
    });
}

// Run the program
main();
